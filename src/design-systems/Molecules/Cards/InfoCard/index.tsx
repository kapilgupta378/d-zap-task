import { Tooltip } from "@/design-systems/Atoms/ToolTip";
import Typography from "@/design-systems/Atoms/Typography";
import React from "react";

interface InfoCardProps {
  totalRewardsClaimed: string;
  title: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ totalRewardsClaimed, title }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-152 flex justify-between gap-5 px-8 py-6 rounded-sm items-start max-md:flex-wrap max-md:px-5 w-[50%]">
      <div className="flex grow flex-col items-stretch w-full">
        <div className="text-neutral-400 text-lg">{title}</div>
        <Tooltip message={Number(totalRewardsClaimed).toFixed(2)}>
          <Typography
            size="h2"
            className="text-white truncate !w-full text-6xl font-semibold leading-10 mt-5 max-md:text-4xl max-md:leading-8"
          >
            {Number(totalRewardsClaimed).toFixed(2)}
          </Typography>
        </Tooltip>
      </div>
    </div>
  );
};

export default InfoCard;
