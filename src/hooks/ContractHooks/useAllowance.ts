import { useAccount, useReadContract } from "wagmi";
import { CoinContractConfig, StakeContractAddress } from "@/utils/Constant";
import { useMemo } from "react";
import { formatEther } from "viem";

export function useAllowance() {
  const { address: userAddress } = useAccount();
  const { data, isLoading } = useReadContract({
    functionName: "allowance",
    args: [userAddress, StakeContractAddress],
    query: {
      enabled: Boolean(userAddress),
    },
    ...CoinContractConfig,
  });

  const allowance = useMemo(() => formatEther((data || "") as bigint), [data]);
  return { allowance, isLoading };
}
