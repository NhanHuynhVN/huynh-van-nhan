import {ConfigProvider} from "antd";
import React from "react";

const AntdConfigProvider = ({children}: {children: React.ReactNode}) => {
   return (
      <ConfigProvider
         theme={{
            token: {
               fontFamily: "Poppins, sans-serif",
               lineWidth: 0,
               colorText: "#fff",
               colorTextDisabled: "#fff",
               colorBgContainer: "#0e0e2a",
               colorBgContainerDisabled: "#0e0e2a",
            },
            components: {
               Button: {
                  colorPrimary: "linear-gradient(94deg,#a93eff,#5e40de 51%,#00b3ff)",
                  colorPrimaryHover: "linear-gradient(93.69deg,#7200ce,#4023bf)",
                  colorPrimaryActive: "linear-gradient(93.69deg,#7200ce,#4023bf)",
                  lineWidth: 0,
               },
               Form: {
                  labelColor: "#fff",
               },
               InputNumber: {
               },
               Select: {
                  optionSelectedBg: "#9E9EA9",
                  optionActiveBg: "#3e3e54",
               },
            },
         }}
      >
         {children}
      </ConfigProvider>
   );
};

export default AntdConfigProvider;
