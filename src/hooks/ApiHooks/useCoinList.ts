import { useQuery } from "@tanstack/react-query";

import { HomeService } from "@/api-services";
import { useMemo } from "react";
import { QUERIES_KEY } from "@/utils/api-integration";

// Custom hook for fetching coin list data
export const useCoinList = () => {
  // Use the `useQuery` hook to fetch data from the API
  const {
    isLoading: isLoadingCoinList,
    data,
    status,
  } = useQuery({
    queryKey: [QUERIES_KEY.PUBLIC.GET_COIN_LIST],
    queryFn: () => HomeService.getCoinList(),
    select: (res) => res,
    refetchOnWindowFocus: false,
    retry: false,
    // enabled: false,
  });

  // Memoize the coinList based on the status and data to prevent unnecessary recalculations
  const coinList = useMemo(() => {
    // If there is an error or the query is pending, return an empty array for currencies
    if (status === "error" || status === "pending") {
      return { currencies: [] } as CoinListResponse;
    } else {
      // Otherwise, return the actual data received from the API
      return data;
    }
  }, [data, status]);

  // Return the loading state and memoized coinList
  return {
    isLoadingCoinList,
    coinList,
  };
};
