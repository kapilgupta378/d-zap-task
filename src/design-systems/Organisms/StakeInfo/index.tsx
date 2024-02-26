import Button from "@/design-systems/Atoms/Button";
import Typography from "@/design-systems/Atoms/Typography";
import { useClaimReward } from "@/hooks/ContractHooks/useClaimReward";
import { useUnStake } from "@/hooks/ContractHooks/useStake";
import { useStakerDetails } from "@/hooks/ContractHooks/useStakerDetails";
import React from "react";

const StakeInfo = () => {
  const { unStackToken, reset: stakeReset, status: StakeStatus } = useUnStake();
  const { stakerDetails, refetch, isLoading } = useStakerDetails();
  const { claimReward, status, reset } = useClaimReward();

  const handleUnstack = async () => {
    stakeReset;
    await unStackToken();
    refetch();
  };
  const handleClaim = async () => {
    reset();
    await claimReward();
    refetch();
  };

  if (isLoading) {
    return (
      <div className="w-[50%]">
        <div className=" mx-auto">
          <div
            style={{
              background:
                "linear-gradient(157deg, rgba(192, 0, 183, 0.60) -1.77%, rgba(115, 0, 204, 0.60) 16.09%, rgba(4, 4, 16, 0.00) 35.63%)",
            }}
            className="flex  grow basis-[0%] flex-col px-14 py-11 rounded-[48px] max-md:max-w-full max-md:px-5"
          >
            <div className="w-full  mx-auto">
              <div className="flex  grow basis-[0%] flex-col  rounded-[48px] max-md:max-w-full max-md:px-5">
                <div className="animate-pulse bg-neutral-400  h-14 w-32 mb-5 self-center"></div>
                <div className="flex gap-5">
                  <div className="bg-neutral-400 animate-pulse rounded-2xl h-28 w-full self-stretch mb-8"></div>
                  <div className="bg-neutral-400 animate-pulse rounded-2xl h-28 w-full self-stretch mb-8"></div>
                </div>
                <div className="bg-neutral-400 animate-pulse rounded-2xl h-28 w-full self-stretch mb-8"></div>
                <div className="flex justify-center gap-5">
                  <div className="animate-pulse bg-neutral-400 rounded-full h-10 w-40 self-center mb-8"></div>
                  <div className="animate-pulse bg-neutral-400 rounded-full h-10 w-40 self-center mb-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
        <div className="flex gap-5  flex-row ">
          <div className="bg-white bg-opacity-10 backdrop-blur-152  self-stretch flex w-full justify-between gap-5 px-8 py-6 rounded-sm items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5 w-[50%]">
            <div className="flex grow basis-[0%] flex-col items-stretch">
              <div className="text-neutral-400 text-lg">Unclaimed Rewards</div>
              <Typography
                size="h2"
                className="text-white  text-6xl font-semibold leading-10 mt-5 max-md:text-4xl max-md:leading-8"
              >
                {Number(stakerDetails.unclaimedRewards).toFixed(2)}
              </Typography>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-152  self-stretch flex w-full justify-between gap-5 px-8 py-6 rounded-sm items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5 w-[50%]">
            <div className="flex grow basis-[0%] flex-col items-stretch">
              <div className="text-neutral-400 text-lg">Total stack</div>
              <Typography
                size="h2"
                className="text-white  text-6xl font-semibold leading-10 mt-5 max-md:text-4xl max-md:leading-8"
              >
                {Number(stakerDetails.stakedAmount).toFixed(2)}
              </Typography>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-152  flex justify-between gap-5 px-8 py-6 rounded-sm items-start max-md:max-w-full max-md:flex-wrap max-md:px-5 w-[50%]">
          <div className="flex grow flex-col items-stretch">
            <div className="text-neutral-400 text-lg">Claimed Rewards</div>
            <Typography
              size="h2"
              className="text-white  text-6xl font-semibold leading-10 mt-5 max-md:text-4xl max-md:leading-8"
            >
              {Number(stakerDetails.totalRewardsClaimed).toFixed(2)}
            </Typography>
          </div>
        </div>
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
