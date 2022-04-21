async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const DaffyToken = await ethers.getContractFactory("DaffyToken");
  const daffyToken = await DaffyToken.deploy();
  await daffyToken.deployed();
  console.log(`ICO contract address: ${daffyToken.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
