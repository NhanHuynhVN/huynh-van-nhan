import {Form, FormProps, Space} from "antd";
import React, {useState} from "react";
import {FieldType} from "../types";
import SelectCurrency from "./SelectCurrency";
import CustomizeButton from "./CustomizeButton";
import {SendOutlined} from "@ant-design/icons";
import InputAmount from "./InputAmount";
import ErrorMessage from "./ErrorMessage";

const CurrencyConverter = () => {
   const [loading, setLoading] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [form] = Form.useForm();

   const [sendPrice, setSendPrice] = useState<number | undefined>();
   const [receivePrice, setReceivePrice] = useState<number | undefined>();

   const amountSend = Form.useWatch("amountToSend", form);
   const [amountReceive, setAmountReceive] = useState<number | undefined>();

   const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      const result = (values.amountToSend * sendPrice!) / receivePrice!;
      setAmountReceive(parseFloat(result.toFixed(2)));
      setIsSubmitted(true);
      setLoading(false);
   };

   const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };
   return (
      <Form
         form={form}
         name="swap"
         className="max-w-[600px] px-8 pt-10 pb-16 w-full rounded-[18px] bord bg-gradient-to-b from-[rgba(26,38,68,1)] to-[rgba(14,14,42,1)]"
         layout="vertical"
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
      >
         <Form.Item label="Amount to send">
            <Space.Compact block className="text-input-99tech">
               <Form.Item noStyle name="amountToSend">
                  <InputAmount />
               </Form.Item>
               <SelectCurrency
                  onChange={(_, option) => {
                     setAmountReceive(undefined);
                     setSendPrice(option.price);
                  }}
               />
            </Space.Compact>
            <ErrorMessage amount={amountSend} price={sendPrice} isSubmitted={isSubmitted} />
         </Form.Item>
         <Form.Item label="Amount to receive">
            <Space.Compact block className="text-input-99tech">
               <InputAmount value={amountReceive} disabled />
               <SelectCurrency
                  onChange={(_, option) => {
                     setAmountReceive(undefined);
                     setReceivePrice(option.price);
                  }}
               />
            </Space.Compact>
            <ErrorMessage
               amount={amountReceive}
               price={receivePrice}
               amountDisabled={true}
               isSubmitted={isSubmitted}
            />
         </Form.Item>
         <Form.Item>
            <div className="flex justify-end">
               <CustomizeButton
                  className="justify-end font-bold"
                  icon={<SendOutlined />}
                  htmlType="submit"
                  loading={loading}
               >
                  CONFIRM SWAP
               </CustomizeButton>
            </div>
         </Form.Item>
      </Form>
   );
};

export default CurrencyConverter;
