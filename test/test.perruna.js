const { ethers } = require("hardhat");

describe("Perruna ICO", () => {
  it("should deploy ICO successfully", async () => {
    const [
      { address: deployer },
      { address: second },
      { address: third },
      { address: fourth },
      { address: fifth },
    ] = await ethers.getSigners();
    const cap = ethers.utils.parseEther((0.574 * 10).toString());
    const minInvestment = ethers.utils.parseEther("0.15");
    const Perruna = await ethers.getContractFactory("Perruna");
    const perruna = await Perruna.deploy("Perruna", "DFT", cap);
    await perruna.deployed();
    let bal = ethers.utils.formatEther(
      await ethers.provider.getBalance(deployer)
    );
    bal = ethers.utils
      .parseEther(Math.ceil(Number(bal / 2).toFixed(0)).toString())
      .toString();

    const Presale = await ethers.getContractFactory("Presale");

    const presale = await Presale.deploy(
      [second, third, fourth, fifth],
      new Date("2022-4-27").getTime(),
      Number(ethers.utils.parseEther("5.5")),
      {
        value: Number(ethers.utils.parseEther("5.5")),
      }
    );

    let balance = (await presale.balances(deployer)).toString();
    console.log("Owner tokens: %s,", ethers.utils.formatEther(balance));

    await presale.deposit(second, minInvestment);

    await presale.deposit(third, minInvestment);

    await presale.deposit(third, minInvestment);
    balance = (await presale.totalDeposits()).toString();
    balance = ethers.utils.formatEther(balance);
    console.log("Purchased tokens: %s,", balance);
    const percentage = balance * 0.1;
    console.log("Percentage", percentage);
  });
});
