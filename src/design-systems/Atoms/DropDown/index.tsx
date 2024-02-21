import { useCallback, useState } from "react";

import { DropDownProps } from "./interface";
import Typography from "../Typography";
import { DropDownIcon } from "../Icons";
import { ExploreBlock } from "@/interfaces";

const DropDown: React.FC<DropDownProps> = ({
  className,
  data = [],
  defaultValue,
  onChange,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [value, setValue] = useState<ExploreBlock>(defaultValue);

  const handleHover = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleLeaveHover = useCallback(() => {
    setIsHover(false);
  }, []);
  const handleChange = (selectedValue: ExploreBlock) => {
    setValue(selectedValue);
    onChange?.(selectedValue);
  };
  return (
    <div className="relative z-10   h-[64px] w-full">
      <div
        className={`border-lightGray group absolute z-[99999999] block h-fit w-full items-start rounded-sm border-[0.5px] bg-white px-4 py-3 hover:bg-neutral-800 hover:-h-[300px] overflow-auto ${className} max-h-[350px] overflow-auto`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeaveHover}
      >
        <div className="flex items-center justify-between gap-2">
          <Typography className="text-gray text-base font-semibold">
            {value.name}
          </Typography>
          <DropDownIcon
            className={`transform ${
              isHover ? "rotate-180" : "rotate-0"
            } transition-transform duration-300 ease-in`}
            height={8}
            width={16}
          />
        </div>
        <div className="h-0 w-full opacity-0 group-hover:h-fit group-hover:opacity-100">
          <div className="h-full w-full overflow-hidden rounded-sm">
            <ul className="m-0 h-full w-full list-none p-0 ">
              {data.map((drop, i) => (
                <li
                  className="w-full cursor-pointer px-0  pt-0 text-start transition-all duration-200 ease-in group-hover:pt-3 group-hover:ease-out"
                  key={i}
                  onClick={() => handleChange(drop)}
                >
                  <a
                    className={`hoverAnimation text-start text-base font-semibold hover:text-neutral-100  ${
                      drop.name != value.name && "text-lightGray"
                    }`}
                  >
                    {drop.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
