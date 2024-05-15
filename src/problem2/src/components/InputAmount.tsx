import {InputNumber, InputNumberProps} from "antd";

interface InputAmountProps extends InputNumberProps {
   value?: number;
}

const InputAmount = ({value, onChange, ...restProps}: InputAmountProps) => {
   return (
      <InputNumber
         className="w-full border-0"
         value={value}
         onChange={onChange}
         size="large"
         formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
         {...restProps}
         controls={false}
      />
   );
};

export default InputAmount;
