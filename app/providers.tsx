"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";
import { WagmiProvider } from "wagmi";

import { config } from "@/lib/wagmi";
import {
  DynamicContextProvider,
  EthereumWalletConnectors,
  DynamicWagmiConnector,
} from "@/lib/dynamic";

const queryClient = new QueryClient();

export function Providers(props: { children: ReactNode }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "637e6054-a1ab-43f7-802a-227826abb044",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>{props.children}</DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
