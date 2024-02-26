import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { CoinContractConfig, StakeContractAddress } from "@/utils/Constant";
import { useMemo } from "react";
import { formatEther } from "viem";
import { useApprove } from "./useApprove";

export function useAllowance() {
  const { address: userAddress } = useAccount();
  const { data, isLoading } = useReadContract({
    functionName: "allowance",
    args: [userAddress, StakeContractAddress],
    ...CoinContractConfig,
  });

  const allowance = useMemo(() => formatEther((data || "") as bigint), [data]);
  return { allowance, isLoading };
}
