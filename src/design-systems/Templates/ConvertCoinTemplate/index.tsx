"use client";
import Button from "@/design-systems/Atoms/Button";
import Input from "@/design-systems/Atoms/Input";
import Typography from "@/design-systems/Atoms/Typography";
import StakeForm from "@/design-systems/Organisms/StakeForm";
import StakeInfo from "@/design-systems/Organisms/StakeInfo";
import { useStake } from "@/hooks/ContractHooks/useStake";
import { useStakerDetails } from "@/hooks/ContractHooks/useStakerDetails";
import React, { useState } from "react";
import { useAccount } from "wagmi";

const ConvertCoinTemplate = () => {
  const { handleStack } = useStake();
  const { stakerDetails } = useStakerDetails();
  const { address, isConnected } = useAccount();

  console.log(stakerDetails);

  if (false) {
    return (
      <div className="my-[110px]">
        <div className="md:w-[710px] mx-auto">
          <div
            style={{
              background:
                "linear-gradient(157deg, rgba(192, 0, 183, 0.60) -1.77%, rgba(115, 0, 204, 0.60) 16.09%, rgba(4, 4, 16, 0.00) 35.63%)",
            }}
            className="flex  grow basis-[0%] flex-col px-14 py-11 rounded-[48px] max-md:max-w-full max-md:px-5"
          >
            <div className="w-full  mx-auto">
              <div className="flex  grow basis-[0%] flex-col  rounded-[48px] max-md:max-w-full max-md:px-5">
                <div className="animate-pulse bg-gray-300 rounded-full h-14 w-14 mb-5 self-center"></div>
                <div className="animate-pulse bg-gray-300 rounded-full h-8 w-32 self-center mb-2"></div>
                <div className="animate-pulse bg-gray-300 rounded-full h-20 w-40 self-center mb-8"></div>
                <div className="bg-gray-300 animate-pulse rounded-2xl h-28 w-full self-stretch mb-8"></div>
                <div className="bg-gray-300 animate-pulse rounded-2xl h-28 w-full self-stretch"></div>
                <div className="animate-pulse bg-gray-300 rounded-full h-8 w-20 self-center mt-16"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="my-[110px] ">
        <div className="container  px-16">
          <div className="flex gap-8">
            <StakeForm />
            <StakeInfo />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConvertCoinTemplate;
