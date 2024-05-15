import {Button, ButtonProps} from "antd";
import React from "react";

interface CustomizeButtonProps extends ButtonProps {
}

const CustomizeButton = ({...props}: CustomizeButtonProps) => {
   return <Button size="large" type="primary"  iconPosition="end" {...props} />;
};

export default CustomizeButton;