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
