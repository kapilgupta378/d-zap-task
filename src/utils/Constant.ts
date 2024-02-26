import stackAbi from "@/abis/stacking-contract.json";
import coinAbi from "@/abis/coin-contract.json";

export const parseBoolean = (value?: string) => {
  return value && value.toLowerCase() === "true";
};

export const IS_PRODUCTION = parseBoolean(
  process.env.NEXT_PUBLIC_IS_PRODUCTION
);

// to do depend on the url
export const BASE_API_ENDPOINT = IS_PRODUCTION
  ? ""
  : process.env.NEXT_PUBLIC_API_BASE_URL;

export const StakeContractAddress = process.env
  .NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`;
export const CoinContractAddress = process.env
  .NEXT_PUBLIC_COIN_CONTRACT_ADDRESS as `0x${string}`;

export const StakeContractConfig = {
  abi: stackAbi,
  address: StakeContractAddress,
};

export const CoinContractConfig = {
  abi: coinAbi,
  address: CoinContractAddress,
};
