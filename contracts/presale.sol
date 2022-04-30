//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract Presale is Ownable {
    mapping (address => bool) public whitelist;
    mapping (address => uint) public balances;
    
    bool whitelistAll;
    bool public closed;

    uint256 _closingTime;
    uint256 maxSupply;
    
    uint256 public totalDeposits;
    ERC20 public token;
    uint256 whitelistedUsers;

    event Deposit(
        address indexed _from,
        uint _value
    );
    event Payout(
        address indexed _to,
        uint _value
    );
    event Refund(
        address indexed _to,
        uint _value
    );

    constructor(address[] memory users,uint256 closingTime, uint256 _maxSupply) payable {
        setMaxSupply(_maxSupply);
        setCloseState(false);
        whitelistUser(msg.sender);
        whitelistUsers(users);
        deposit(owner(), msg.value);
        setClosingTime(closingTime);
    }

    function setClosingTime(uint256 closingTime) internal {
        _closingTime = closingTime;
    }

    function setMaxSupply(uint256 _maxSupply) internal {
        console.log(_maxSupply);
        maxSupply = _maxSupply;
    }

    function included(address buyer) public view returns (bool ok) {
        return whitelistAll || whitelist[buyer];
    }
    
    function refund(address buyer) internal {
        uint amount = balances[buyer];
        // if the buyer is not included in the pool
        // then the buyer's contribution is not included
        // in totalDeposits, so we only need to update
        // totalDeposits if the buyer is refunding their funds
        // while the pool is open
        if (!closed) {
            totalDeposits -= amount;
        }
        balances[buyer] = 0;
        payable(buyer).transfer(amount);
        emit Refund(buyer, amount);
    }

    function checkClosed() internal {
        if(block.timestamp > _closingTime){
            close(msg.sender);
        }
    }

    function deposit(address buyer, uint amount) public {
        require(!closed);
        console.log(totalDeposits);
        console.log(maxSupply);
        require(totalDeposits < maxSupply,"Sold out");
        checkClosed();
        require(included(msg.sender), "Address is not whitelisted for purchase");
        balances[buyer] += amount;
        totalDeposits += amount;
        maxSupply -= amount;
        emit Deposit(buyer, amount);
    }

    function payoutTokens(address buyer) internal {
        uint tokenBalance = token.balanceOf(address(this));
        require(tokenBalance > 0);
        uint buyerDeposit = balances[buyer];
        uint buyerShare = (buyerDeposit * tokenBalance) / totalDeposits;
        totalDeposits -= buyerDeposit;
        balances[buyer] = 0;
        require(token.transfer(buyer, buyerShare));
        emit Payout(buyer, buyerShare);
    }

    function close(address presaleAddress) internal {
        require(msg.sender == owner());
        require(!closed);
        setCloseState(true);                    
        payable(presaleAddress).transfer(totalDeposits);
    }

    function setCloseState(bool state) internal {
        closed = state;
    }

    function closeAllowAll(address presaleAddress) public {
        require(msg.sender == owner());
        require(!closed);
        setCloseState(true);
        whitelistAll = true;
        payable(presaleAddress).transfer(totalDeposits);
    }

    function setToken(address tokenAddress) public {
        require(msg.sender == owner());
        token = ERC20(tokenAddress);
    }

    function kill() public {
        require(msg.sender == owner());
        selfdestruct(payable(owner()));
    }

    function payout() external payable {
        // to deposits send > 1, to refund or payout send 0 eth
        if (msg.value <= 1) {
            // refund deposits if the sale isn't closed
            // or the buyer was not included in the sale's whitelist
            if (!closed || !included(msg.sender)) {
                refund(msg.sender);
                return;
            }
            payoutTokens(msg.sender);
        } else {
            deposit(msg.sender, msg.value);
        }
    }

    function whitelistUsers(address[] memory _users) internal onlyOwner {
        for (uint256 i = 0; i < _users.length; i++)
        {
            address user = _users[i];
            whitelistUser(user);
        }
    }

    function whitelistUser(address _user) internal {
        whitelist[_user] = true;
        whitelistedUsers = whitelistedUsers + 1;
    }
}