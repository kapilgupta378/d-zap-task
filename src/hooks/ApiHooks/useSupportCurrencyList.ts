import { useQuery } from "@tanstack/react-query";

import { HomeService } from "@/api-services";
import { useMemo } from "react";
import { QUERIES_KEY } from "@/utils/api-integration";

export const useSupportCurrencyList = () => {
  // Use the `useQuery` hook to fetch data from the API
  const {
    isLoading: isLoadingSupCurrency,
    data,
    status,
  } = useQuery({
    queryKey: [QUERIES_KEY.PUBLIC.GET_SUPPORTED_CURRENCY_LIST],
    queryFn: () => HomeService.getSupportedCurrencyList(),
    select: (res) => res,
    refetchOnWindowFocus: false,
    retry: false,
  });

  // Memoize the supportCurrencyList based on the status and data to prevent unnecessary recalculations
  const supportCurrencyList = useMemo(() => {
    // If there is an error or the query is pending, return an empty array for supported currencies
    if (status === "error" || status === "pending") {
      return { supportedCurrencies: [] } as SupportedCurrenciesResponse;
    } else {
      // Otherwise, return the actual data received from the API
      return data;
    }
  }, [data, status]);

  return {
    isLoadingSupCurrency,
    supportCurrencyList,
  };
};
