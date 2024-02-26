import Button from "@/design-systems/Atoms/Button";
import { Tooltip } from "@/design-systems/Atoms/ToolTip";
import Typography from "@/design-systems/Atoms/Typography";
import InfoCard from "@/design-systems/Molecules/Cards/InfoCard";
import StakeInfoLoading from "@/design-systems/Molecules/Loading/StakeInfo";
import { useClaimReward } from "@/hooks/ContractHooks/useClaimReward";
import { useUnStake } from "@/hooks/ContractHooks/useStake";
import { useStakerDetails } from "@/hooks/ContractHooks/useStakerDetails";
import React from "react";
import { toast } from "react-toastify";

const StakeInfo = () => {
  const { unStackToken, reset: stakeReset, status: StakeStatus } = useUnStake();
  const { stakerDetails, refetch, isLoading } = useStakerDetails();
  const { claimReward, status, reset } = useClaimReward();

  const handleUnstack = async () => {
    try {
      stakeReset;
      await unStackToken();
      refetch();
      toast.success("Token unstake successfully.");
    } catch (error) {
      toast.success("Something went wrong please try again later..");
    }
  };
  const handleClaim = async () => {
    try {
      reset();
      await claimReward();
      refetch();
      toast.success("Reward claim successfully.");
    } catch (error) {
      toast.success("Something went wrong please try again later..");
    }
  };

  if (isLoading) {
    return <StakeInfoLoading />;
  }

  return (
    <div
      style={{
        background:
          "linear-gradient(157deg, rgba(192, 0, 183, 0.60) -1.77%, rgba(115, 0, 204, 0.60) 16.09%, rgba(4, 4, 16, 0.00) 35.63%)",
      }}
      className="flex w-[50%] grow  flex-col px-14 py-11 rounded-[48px] max-md:max-w-full max-md:px-5"
    >
      <Typography
        size="h2"
        className="text-white text-5xl font-bold text-center max-md:text-4xl"
      >
        Stake Info
      </Typography>

      <div className="flex gap-5 mt-12 mb-12 flex-col flex-wrap">
        <div className="flex gap-5  flex-row w-full">
          <InfoCard
            title="Unclaimed Rewards"
            totalRewardsClaimed={stakerDetails.unclaimedRewards}
          />
          <InfoCard
            title="Total stack"
            totalRewardsClaimed={stakerDetails.stakedAmount}
          />
        </div>

        <InfoCard
          title="Claimed Rewards"
          totalRewardsClaimed={stakerDetails.totalRewardsClaimed}
        />
      </div>
      <div className="flex gap-5 justify-center">
        <Button
          style={{
            backgroundImage:
              "linear-gradient(92deg, #D300B2 -4.3%, #3200DE 92.16%)",
          }}
          className="border-0 w-[140px] text-white h-fit"
          onClick={handleUnstack}
        >
          {StakeStatus === "pending" ? "Loading" : "Withdraw All"}
        </Button>
        <Button
          style={{
            backgroundImage:
              "linear-gradient(92deg, #D300B2 -4.3%, #3200DE 92.16%)",
          }}
          className="border-0 w-[140px] text-white h-fit"
          onClick={handleClaim}
        >
          {status === "pending" ? "Loading" : "Claim Reward"}
        </Button>
      </div>
    </div>
  );
};

export default StakeInfo;
