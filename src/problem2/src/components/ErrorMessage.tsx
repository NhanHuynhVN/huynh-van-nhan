import {Typography} from "antd";

interface ValidationProps {
   amount?: number;
   price?: number;
   amountDisabled?: boolean;
   isSubmitted?: boolean;
}

const ErrorMessage = ({
   amount,
   price,
   amountDisabled = false,
   isSubmitted = false,
}: ValidationProps) => {
   if (!isSubmitted) return null;
   return (
      <div className="flex justify-between">
         <div>
            {!amountDisabled && !amount && (
               <Typography.Text className="" type="danger">
                  Please enter amount
               </Typography.Text>
            )}
         </div>
         <div>
            {!price && <Typography.Text type="danger">Please select currency</Typography.Text>}
         </div>
      </div>
   );
};

export default ErrorMessage;
