import React from "react";

interface StakeFormLoadingProps {}

const StakeFormLoading: React.FC<StakeFormLoadingProps> = () => {
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
};

export default StakeFormLoading;
