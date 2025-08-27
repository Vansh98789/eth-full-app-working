require("dotenv").config();
const { ethers } = require("ethers");
const fs = require("fs");

// Load ABI
const abi = JSON.parse(fs.readFileSync("./src/CounterABI.json", "utf8")); // or directly put abi here 

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, wallet);

// Read current count
async function getCount() {
  return await contract.get();
}

// Increment
async function increment() {
  return await contract.inc();
}

// Decrement
async function decrement() {
  return await contract.dec();
}

// Set (owner only)
async function setCount(value) {
  return await contract.set(value);
}

module.exports = { getCount, increment, decrement, setCount };
