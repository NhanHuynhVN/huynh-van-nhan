import useCurrency from "../hooks/useCurrency";
import {Empty, Image, Select} from "antd";
import React from "react";
import {Currency} from "../types";
import {CaretDownOutlined} from "@ant-design/icons";

type SelectCurrencyProps = {
   value?: string;
   onChange?: (value: string, option: Currency) => void;
};

const SelectCurrency = ({value, onChange}: SelectCurrencyProps) => {
   const [currencyOptions] = useCurrency();

   return (
      <Select
         className="!w-[250px]"
         value={value}
         onChange={(value, option) => {
            if (onChange) onChange(value, option as Currency);
         }}
         options={currencyOptions}
         fieldNames={{
            label: "currency",
            value: "price",
         }}
         size="large"
         labelRender={(props) => {
            try {
               return (
                  <span className="flex items-center gap-2">
                     <Image
                        src={require(`../assets/tokens/${props.label}.svg`) ?? null}
                        preview={false}
                     />
                     <span>{props.label}</span>
                  </span>
               );
            } catch (error) {
               return <span>{props.label}</span>;
            }
         }}
         optionRender={({data}) => {
            try {
               return (
                  <span className="flex items-center gap-2">
                     <Image
                        src={require(`../assets/tokens/${data.currency}.svg`) ?? null}
                        preview={false}
                     />
                     <span>{data.currency}</span>
                  </span>
               );
            } catch (error) {
               return <span>{data.currency}</span>;
            }
         }}
         suffixIcon={<CaretDownOutlined className="text-white" />}
         filterOption={(input, option) =>
            option ? option?.currency.toLowerCase().indexOf(input.toLowerCase()) >= 0 : true
         }
         showSearch
         notFoundContent={
            <Empty
               className="flex flex-col items-center"
               image="https://cdn0.iconfinder.com/data/icons/3d-front-gradient/512/zoom-front-gradient.png"
               imageStyle={{height: 60}}
               description={<span>No data</span>}
            />
         }
      />
   );
};

export default SelectCurrency;
