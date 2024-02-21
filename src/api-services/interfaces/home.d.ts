interface Currency {
  name: string;
  id: string;
}

interface CoinListResponse {
  currencies: Currency[];
}

interface SupportedCurrenciesResponse {
  supportedCurrencies: string[];
}

interface ConvertQuery {
  amount: string;
  target: string;
  source: string;
}