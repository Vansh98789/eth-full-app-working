import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains([chain.sepolia], [publicProvider()]);

const client = createClient({
  autoConnect: true,
  provider,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiConfig client={client}>
    <App />
  </WagmiConfig>
);
