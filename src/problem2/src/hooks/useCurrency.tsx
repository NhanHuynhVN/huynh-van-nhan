import { useEffect, useState } from 'react';
import { getCurrency } from '../services/currency';
import { Currency } from '../types';

const useCurrency = () => {
  const [currencyOptions, setCurrencyOptions] = useState<Currency[]>([]);

  useEffect(() => {
    getCurrency().then((res) => {
      setCurrencyOptions(res.data);
    }).catch((err) => {
    });
  }, []);
  return [currencyOptions];
};

export default useCurrency;