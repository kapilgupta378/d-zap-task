import { useWriteContract } from "wagmi";
import { StakeContractConfig } from "@/utils/Constant";

export function useClaimReward() {
  const { writeContractAsync, status, reset  } = useWriteContract();

  const claimReward = async () => {
    await writeContractAsync({
      functionName: "claimRewards",
      ...StakeContractConfig,
    });
  };

  return { claimReward, status, reset };
}
