const { ethers } = require("hardhat");

describe("DaffyToken ICO", () => {
  it("should deploy ICO successfully", async () => {
    const [deployer, anotherUser] = await ethers.getSigners();
    const cap = ethers.utils.parseEther((0.574 * 1000000).toString());
    const minInvestment = ethers.utils.parseEther("0.1");
    const rate = ethers.utils.parseEther("0.1");
    const DaffyToken = await ethers.getContractFactory("DaffyToken");
    const daffyToken = await DaffyToken.deploy("DaffyToken", "DFT", cap);
    await daffyToken.deployed();
    let balance = (await daffyToken.balanceOf(deployer.address)).toString();
    console.log("Owner tokens: %s,", balance);

    const Presale = await ethers.getContractFactory("Presale");

    const presale = await Presale.deploy(
      daffyToken.address,
      deployer.address,
      minInvestment,
      cap,
      rate / 100000
    );

    await presale.buyTokens(anotherUser.address, {
      value: 1,
    });
    balance = (await daffyToken.balanceOf(anotherUser.address)).toString();
    console.log("Purchased tokens: %s,", balance);
  });
});
