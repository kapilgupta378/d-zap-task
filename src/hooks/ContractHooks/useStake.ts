import { useWriteContract } from "wagmi";
import { StakeContractConfig } from "@/utils/Constant";
import { useApprove } from "./useApprove";
import { parseUnits } from "viem";
import { useMemo } from "react";

export function useStake() {
  const { writeContractAsync, isPending, status } = useWriteContract();
  const { approveTokenAsync, status: approveStatus } = useApprove();

  const handleStack = async (stakeAmount: string) => {
    await approveTokenAsync(stakeAmount);
    await writeContractAsync({
      functionName: "stake",
      ...StakeContractConfig,
      args: [parseUnits(stakeAmount?.toString(), 6)],
    });
  };
  const loading = useMemo(
    () => status === "pending" || approveStatus === "pending",
    [status, approveStatus]
  );
  return { handleStack, loading };
}

export function useUnStake() {
  const { writeContractAsync, status, reset } = useWriteContract();
  const unStackToken = async () => {
    await writeContractAsync({
      functionName: "unstake",
      ...StakeContractConfig,
    });
  };

  return {
    unStackToken,
    status,
    reset,
  };
}
