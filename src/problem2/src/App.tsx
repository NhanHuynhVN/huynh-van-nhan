import React from "react";
import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import AntdConfigProvider from "./contexts/AntdConfigProvider";

function App() {
   return (
      <AntdConfigProvider>
         <div className="w-full h-screen flex justify-center items-center bg-99tech ">
            <CurrencyConverter />
         </div>
      </AntdConfigProvider>
   );
}

export default App;
