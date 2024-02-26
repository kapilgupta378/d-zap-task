import Button from "@/design-systems/Atoms/Button";
import Input from "@/design-systems/Atoms/Input";
import Typography from "@/design-systems/Atoms/Typography";
import { useAllowance } from "@/hooks/ContractHooks/useAllowance";
import { useStake } from "@/hooks/ContractHooks/useStake";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useFormik } from "formik";
import React from "react";
import { useAccount } from "wagmi";
import * as Yup from "yup";
const StakeForm = () => {
  const { handleStack, loading } = useStake();
  const { isLoading } = useAllowance();
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();

  const {
    getFieldProps: getFieldPropsStake,
    handleSubmit: handleSubmitStake,
    errors: errorsStake,
  } = useFormik({
    initialValues: {
      stakeAmount: "",
    },
    validationSchema: Yup.object({
      stakeAmount: Yup.number().required("Stake Amount is required"),
    }),
    onSubmit: (values) => {
      if (!isConnected) {
        open();
        return;
      }
      handleStack(values.stakeAmount.toString());
    },
  });

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

                <div className="bg-neutral-400 animate-pulse rounded-2xl h-28 w-full self-stretch mb-8"></div>
                <div className="animate-pulse bg-neutral-400 rounded-full h-20 w-40 self-center mb-8"></div>
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
      className="flex  w-[50%] grow flex-col px-14 py-11 rounded-[48px] max-md:max-w-full max-md:px-5"
    >
      <Typography
        size="h2"
        className="text-white text-5xl font-bold text-center max-md:text-4xl"
      >
        Stake coin
      </Typography>
      <form onSubmit={handleSubmitStake}>
        <div className="bg-white bg-opacity-10 backdrop-blur-152  self-stretch flex w-full justify-between gap-5 mt-12 px-8 py-6 rounded-sm items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
          <div className="flex grow basis-[0%] flex-col items-stretch">
            <div className="text-neutral-400 text-lg">You’re staking</div>
            <div className="text-white text-4xl font-semibold mt-4">
              <Input
                type="number"
                placeholder="Enter amount here"
                className="!bg-transparent outline-none focus:outline-none active:outline-none focus-visible:outline-none w-full"
                error={errorsStake.stakeAmount}
                {...getFieldPropsStake("stakeAmount")}
              />
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Button
            type="submit"
            style={{
              backgroundImage:
                "linear-gradient(92deg, #D300B2 -4.3%, #3200DE 92.16%)",
            }}
            className="border-0 w-[120px] text-white h-fit"
          >
            {loading ? "Loading..." : "Stake"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StakeForm;
