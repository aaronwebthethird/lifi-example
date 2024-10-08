import { createConfig } from "wagmi";
import {
  mainnet,
  bsc,
  base,
  polygon,
  arbitrum,
  optimism,
  avalanche,
} from 'viem/chains';
import { createClient, http } from 'viem';

export const config = createConfig({
  chains: [mainnet, bsc, base, polygon, arbitrum, optimism, avalanche],
  multiInjectedProviderDiscovery: false,
  ssr: true,
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
