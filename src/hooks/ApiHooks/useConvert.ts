import { useMutation } from "@tanstack/react-query";

import { HomeService } from "@/api-services";
import { useMemo } from "react";

// Custom hook for handling currency conversion
export const useConvert = () => {
  // Use the `useMutation` hook to handle asynchronous mutation (conversion) logic
  const {
    mutateAsync: convertMutateAsync,
    data,
    status,
    isPending,
    reset,
  } = useMutation({
    mutationFn: (query: ConvertQuery) => HomeService.getConvertedPrice(query), // Function for making the conversion API call
  });

  // Memoize the convertedAmount based on the status and data to prevent unnecessary recalculations
  const convertedAmount = useMemo(() => {
    // If there is an error or the mutation is pending, return undefined for convertedAmount
    if (status === "error" || status === "pending") {
      return undefined;
    } else {
      // Otherwise, return the actual converted data received from the API
      return data;
    }
  }, [data, status]);

  // Return the conversion-related functions and state
  return {
    convertMutateAsync,
    convertedAmount,
    isPending,
    reset,
  };
};
