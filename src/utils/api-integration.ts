export const API_ENDPOINTS = {
  AUTH: {},
  PRIVATE: {},
  PUBLIC: {
    GET_COIN_LIST: "/currencies",
    GET_SUPPORTED_CURRENCY_LIST: "/supported-currencies",
    GET_CONVERSION_PRICE: "convert",
  },
} as const;

export const QUERIES_KEY = {
  AUTH: {},
  PRIVATE: {},
  PUBLIC: {
    GET_CONVERSION_PRICE: "get-conversion-price",
    GET_COIN_LIST: "get-coin-list",
    GET_SUPPORTED_CURRENCY_LIST: "supported-currencies",
  },
} as const;
