import { useWriteContract } from "wagmi";
import { CoinContractConfig, StakeContractAddress } from "@/utils/Constant";
import { parseUnits } from "viem";
import { publicClient } from "@/wallet-service";

export function useApprove() {
  const { writeContractAsync, status } = useWriteContract();

  const approveTokenAsync = async (amount: string) => {
    const result = await writeContractAsync({
      functionName: "approve",
      ...CoinContractConfig,
      args: [StakeContractAddress, parseUnits(amount, 6)],
    });
    await publicClient.waitForTransactionReceipt({
      hash: result,
    });
  };

  return {
    approveTokenAsync,
    status,
  };
}
