// Import necessary modules and components
"use client";
import React, { useEffect, useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "@/design-systems/Atoms/Button";
import Input from "@/design-systems/Atoms/Input";
import Typography from "@/design-systems/Atoms/Typography";
import DropDown from "@/design-systems/Atoms/DropDown";
import { useCoinList } from "@/hooks/ApiHooks/useCoinList";
import { useSupportCurrencyList } from "@/hooks/ApiHooks/useSupportCurrencyList";
import { useConvert } from "@/hooks/ApiHooks/useConvert";
import Spinner from "@/design-systems/Atoms/Spinner";

// Define validation schema using Yup
const validationSchema = Yup.object({
  amount: Yup.string().required("Amount is required."),
  source: Yup.string().required("Source is required."),
  target: Yup.string().required("Target is required."),
});

// Define initial form values
const initialValues: ConvertQuery = {
  amount: "",
  source: "",
  target: "",
};

// Main component for converting coins
const ConvertCoinTemplate = () => {
  // Custom hooks for fetching coin list, supported currency list, and handling conversion
  const { coinList, isLoadingCoinList } = useCoinList();
  const { supportCurrencyList, isLoadingSupCurrency } =
    useSupportCurrencyList();
  const { convertMutateAsync, convertedAmount, isPending, reset } =
    useConvert();

  // Create options for crypto currency dropdown
  const cryptoCurrencyOptions = useMemo(() => {
    return coinList.currencies.map((item) => ({
      ...item,
      name: item.name,
      value: item.id,
    }));
  }, [coinList]);

  // Create options for supported currency dropdown
  const supportedCurrency = useMemo(() => {
    return supportCurrencyList.supportedCurrencies.map((item) => ({
      name: item,
      value: item,
    }));
  }, [supportCurrencyList]);

  // Formik form configuration
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      await convertMutateAsync(values);
    },
  });

  // Set default values for source and target currencies on mount or when options change
  useEffect(() => {
    if (supportedCurrency.length !== 0)
      formik.setFieldValue("source", cryptoCurrencyOptions[0]?.value);

    if (cryptoCurrencyOptions.length !== 0)
      formik.setFieldValue("target", supportedCurrency[0]?.value);
  }, [supportedCurrency, cryptoCurrencyOptions]);

  return (
    <main>
      <div className="container my-0 mx-auto">
        <div className="flex justify-center gap-5 ">
          <form className="w-[60%]" onSubmit={formik.handleSubmit}>
            {/* Check if data is loaded before rendering form */}
            {!isLoadingCoinList &&
            !isLoadingSupCurrency &&
            cryptoCurrencyOptions[0] &&
            supportedCurrency[0] ? (
              <div className="flex flex-col gap-5">
                {/* Source and target currency dropdowns */}
                <div className="flex gap-5">
                  <div className="w-full">
                    {/* Source currency dropdown */}
                    <Typography className="pb-[6px] text-left font-Poppins text-md font-semibold leading-[145%] text-black smd:pb-2 smd:text-base">
                      Select crypto currency
                    </Typography>
                    <DropDown
                      data={cryptoCurrencyOptions}
                      onChange={(e) => {
                        reset();
                        formik.setFieldValue("source", e.value);
                      }}
                      defaultValue={cryptoCurrencyOptions[0]}
                    />
                    {/* Display error message if source currency is not selected */}
                    {formik.errors.source && formik.touched.source && (
                      <Typography className="text-error-800">
                        {formik.errors.source}
                      </Typography>
                    )}
                  </div>
                  <div className="w-full">
                    {/* Target currency dropdown */}
                    <Typography className="pb-[6px] text-left font-Poppins text-md font-semibold leading-[145%] text-black smd:pb-2 smd:text-base">
                      Select convert currency
                    </Typography>
                    <DropDown
                      data={supportedCurrency}
                      onChange={(e) => {
                        reset();
                        formik.setFieldValue("target", e.value);
                      }}
                      defaultValue={supportedCurrency[0]}
                    />
                    {/* Display error message if target currency is not selected */}
                    {formik.errors.target && formik.touched.target && (
                      <Typography className="text-error-800">
                        {formik.errors.target}
                      </Typography>
                    )}
                  </div>
                </div>

                {/* Input field for entering amount */}
                <Input
                  className="  !w-[100%]"
                  label="Amount "
                  placeholder="Enter amount here"
                  {...formik.getFieldProps("amount")}
                />
                {/* Display error message if amount is not entered */}
                {formik.errors.amount && formik.touched.amount && (
                  <Typography className="text-error-800">
                    {formik.errors.amount}
                  </Typography>
                )}

                {/* Display converted amount if available */}
                {convertedAmount && (
                  <Typography
                    className="text-center text-success-600"
                    size="md"
                  >
                    {`${formik.values.amount.toString()} ${
                      formik.values.source
                    } is equivalent to ${convertedAmount} ${formik.values.target.toLocaleUpperCase()}`}
                  </Typography>
                )}

                {/* Convert button */}
                <Button
                  className=" w-fit  self-center rounded-lg bg-black text-white"
                  type="submit"
                >
                  {/* Show loading state if conversion is pending */}
                  {isPending ? "Loading..." : "Convert"}
                </Button>
              </div>
            ) : (
              // Display spinner while data is loading
              <div className="flex items-center justify-center">
                <Spinner className="" />
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
};

export default ConvertCoinTemplate;
