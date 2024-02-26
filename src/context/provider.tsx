"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { WalletContextProvider } from "./wallet-context";
import { cookieToInitialState } from "wagmi";
import { config } from "@/wallet-service";

export default function Providers({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();
  const initialState = cookieToInitialState(config);

  return (
    <WalletContextProvider initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WalletContextProvider>
  );
}
