const transferTopic = ethers.id("Transfer(address,address,uint256)");

const filter = {
  address: tokenAddress,
  fromBlock: 0,
  toBlock: "latest",
  topics: [transferTopic] // optionally filter by from/to addresses
};

async function fetchLogs() {
  const logs = await provider.getLogs(filter);
  logs.forEach(log => {
    const decoded = ethers.AbiCoder.defaultAbiCoder().decode(
      ["address","address","uint256"],
      log.data
    );
    console.log(decoded);
  });
}

fetchLogs();
