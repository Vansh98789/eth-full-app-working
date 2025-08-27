const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY");

const tokenAddress = "0xYourTokenAddress";
const tokenABI = [
  "event Transfer(address indexed from, address indexed to, uint256 value)"
];

const contract = new ethers.Contract(tokenAddress, tokenABI, provider);

async function indexEvents() {
  const events = await contract.queryFilter(contract.filters.Transfer(), 0, "latest");
  events.forEach(event => {
    console.log(`Tx: ${event.transactionHash}, From: ${event.args.from}, To: ${event.args.to}, Value: ${event.args.value.toString()}`);
  });
}

indexEvents();
