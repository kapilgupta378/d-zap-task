import { useAccount, useReadContract } from "wagmi";
import { StakeContractConfig } from "@/utils/Constant";
import { useMemo } from "react";

export function useStakerDetails() {
  const { address: userAddress } = useAccount();
  const { data } = useReadContract({
    functionName: "getDetails",
    args: [userAddress],
    query: {
      enabled: Boolean(userAddress),
    },
    ...StakeContractConfig,
  });

  const stakeDetails = useMemo(() => {
    const dataArray = data as bigint[];
    if (dataArray) {
      return {
        isPaused: dataArray[0],
        resetClaimDelay: dataArray[1],
        stakeToken: dataArray[2],
        rewardToken: dataArray[3],
        startBlock: dataArray[4],
        endBlock: dataArray[5],
        claimDelay: dataArray[6],
        totalRewards: dataArray[7],
        totalFundsStaked: dataArray[8],
        totalRewardsDistributed: dataArray[9],
      };
    } else {
      return {
        isPaused: false,
        resetClaimDelay: false,
        stakeToken: "",
        rewardToken: "",
        startBlock: "",
        endBlock: "",
        claimDelay: "",
        totalRewards: "",
        totalFundsStaked: "",
        totalRewardsDistributed: "",
      };
    }
  }, [data]);

  return { stakeDetails };
}
