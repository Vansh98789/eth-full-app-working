import React, { useState, useEffect } from "react";
import { useAccount, useConnect, useDisconnect, useContractRead, useContractWrite } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { counterAddress, counterABI } from "../constants/counter";

export default function Counter() {
  const { connect } = useConnect({ connector: new InjectedConnector() }); // MetaMask
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const [count, setCount] = useState(0);

  // Read current counter value
  const { data, refetch } = useContractRead({
    address: counterAddress,
    abi: counterABI,
    functionName: "get",
    watch: true,
  });

  useEffect(() => {
    if (data) setCount(data.toString());
  }, [data]);

  // Increment
  const { write: increment } = useContractWrite({
    address: counterAddress,
    abi: counterABI,
    functionName: "inc",
    onSuccess: () => refetch(),
  });

  // Decrement
  const { write: decrement } = useContractWrite({
    address: counterAddress,
    abi: counterABI,
    functionName: "dec",
    onSuccess: () => refetch(),
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      {!isConnected ? (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => connect()}
        >
          Connect Wallet
        </button>
      ) : (
        <>
          <p>Connected as: {address}</p>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>

          <div className="mt-6 space-y-2">
            <p className="text-2xl font-bold">Counter: {count}</p>
            <div className="space-x-2">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={() => increment()}
              >
                Increment
              </button>
              <button
                className="px-4 py-2 bg-yellow-500 text-black rounded"
                onClick={() => decrement()}
              >
                Decrement
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
