import { API_ENDPOINTS } from "@/utils/api-integration";
import CoreAPIService from "./CoreAPIService";

class HomeService {
  getCoinList = async () => {
    return CoreAPIService.get<CoinListResponse>(
      `${API_ENDPOINTS.PUBLIC.GET_COIN_LIST}`
    );
  };
  getSupportedCurrencyList = async () => {
    return CoreAPIService.get<SupportedCurrenciesResponse>(
      `${API_ENDPOINTS.PUBLIC.GET_SUPPORTED_CURRENCY_LIST}`
    );
  };
  getConvertedPrice = async (query: ConvertQuery) => {
    return CoreAPIService.post<SupportedCurrenciesResponse>(
      `${API_ENDPOINTS.PUBLIC.GET_CONVERSION_PRICE}`,
      query
    );
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HomeService();
