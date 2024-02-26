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
