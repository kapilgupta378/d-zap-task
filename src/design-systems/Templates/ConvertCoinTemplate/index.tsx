"use client";
import StakeForm from "@/design-systems/Organisms/StakeForm";
import StakeInfo from "@/design-systems/Organisms/StakeInfo";
import React from "react";

const ConvertCoinTemplate = () => {
  return (
    <main>
      <div className="my-[110px] ">
        <div className="container mx-auto  px-16">
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
