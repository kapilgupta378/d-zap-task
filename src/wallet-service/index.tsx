import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { createPublicClient } from "viem";

import { cookieStorage, createStorage, http } from "wagmi";
import { polygonMumbai } from "wagmi/chains";

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "D-zap stacking app",
  description: "stacking app",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: [
    "https://avatars.githubusercontent.com/u/https://dzap.io/static/media/Logo.247f945b94ed1dd9e10731b3be93130b.svg",
  ],
};

// Create wagmiConfig
export const config = defaultWagmiConfig({
  chains: [polygonMumbai], // required
  projectId, // required
  metadata, // required
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
});

export const publicClient = createPublicClient({
  chain: polygonMumbai,
  transport: http(),
});
