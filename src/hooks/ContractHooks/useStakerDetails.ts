import { useAccount, useReadContract } from "wagmi";
import { StakeContractConfig } from "@/utils/Constant";
import { useMemo } from "react";
import { formatUnits } from "viem";

export function useStakerDetails() {
  const { address: userAddress } = useAccount();
  const { data, refetch, isLoading } = useReadContract({
    functionName: "getStakerInfo",
    args: [userAddress],
    query: {
      refetchInterval: 2,
      refetchOnReconnect: true,
    },
    ...StakeContractConfig,
  });

  const stakerDetails = useMemo(() => {
    const dataArray = data as bigint[];
    if (dataArray) {
      return {
        exist: dataArray[0],
        stakedAmount: formatUnits(dataArray[1], 6),
        unclaimedRewards: formatUnits(dataArray[2], 6),
        claimCheckpoint: formatUnits(dataArray[3], 6),
        totalRewardsClaimed: formatUnits(dataArray[4], 6),
      };
    } else {
      return {
        exist: "",
        stakedAmount: "",
        unclaimedRewards: "",
        claimCheckpoint: "",
        totalRewardsClaimed: "",
      };
    }
  }, [data]);

  console.log(data);

  return { stakerDetails, refetch, isLoading };
}
