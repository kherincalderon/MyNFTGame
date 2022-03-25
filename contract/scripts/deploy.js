const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["NarutoCheems", "GokuCheems", "PikaCheems"],       // Names
    ["https://gateway.pinata.cloud/ipfs/QmUbaSHzx8Ee1EyEfoioD6YpgVQp1tYSSBKYwqbkqvbpMv", // Images
    "https://gateway.pinata.cloud/ipfs/QmWd7dDZ4XA5XGwMDer9f49Hyz9DdWoBqpTGwDPcfGA9g2", 
    "https://gateway.pinata.cloud/ipfs/QmVce4e9PozgY5nN3mLdwBtA8QDWhhr4XoaE5WzNwPZxdv"],
    [500, 500, 500],                    // HP values
    [100, 200, 150],                       // Attack damage values
    "Cheems Boos", // Boss name
    "https://gateway.pinata.cloud/ipfs/QmeuZrKjte372idYqu7tv4EXXMi7ygyTPFkzhCid84VgFy", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();