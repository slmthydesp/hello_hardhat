import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import { configVariable, defineConfig } from "hardhat/config";

import envEnc from "@chainlink/env-enc";
envEnc.config();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY

if (!SEPOLIA_RPC_URL || !SEPOLIA_PRIVATE_KEY) {
  throw new Error(
    "缺失环境变量！请执行 npx env-enc set 配置 SEPOLIA_RPC_URL、SEPOLIA_PRIVATE_KEY"
  );
}

export default defineConfig({
  plugins: [hardhatToolboxViemPlugin],
  solidity: {
    profiles: {
      default: {
        version: "0.8.28",
      },
      production: {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      url: SEPOLIA_RPC_URL!,
      accounts: [SEPOLIA_PRIVATE_KEY!],
    },
  },
});
