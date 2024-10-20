const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
    // Deploy the PrivateERC721_NFT contract with a name and symbol
    const PrivateERC721_NFT = await ethers.deployContract("PrivateERC721", ["Private NFT", "PNFT"]);
    
    // Wait for the deployment to complete
    await PrivateERC721_NFT.waitForDeployment();
    const deployedContract = await PrivateERC721_NFT.getAddress();
    fs.writeFileSync("0x224B0b68482EeC925c06A6EA97Ac3697420143D7", deployedContract);
    
    console.log(`PrivateERC721_NFT was deployed to ${deployedContract}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});