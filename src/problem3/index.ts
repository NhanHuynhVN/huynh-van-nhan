interface WalletBalance {
   currency: string;
   amount: number;
   blockchain: string;
}
interface FormattedWalletBalance extends WalletBalance {
   formatted: string;
}

const getPriority = (blockchain: string): number => {
   switch (blockchain) {
      case 'Osmosis':
         return 100
      case 'Ethereum':
         return 50
      case 'Arbitrum':
         return 30
      case 'Zilliqa':
         return 20
      case 'Neo':
         return 20
      default:
         return -99
   }
}

// @ts-ignore
interface WalletPageProps extends BoxProps {

}
// @ts-ignore
const WalletPage: React.FC<WalletPageProps> = ({ children, ...rest }: WalletPageProps) => {
   // @ts-ignore
   const balances = useWalletBalances();
   // @ts-ignore
   const prices = usePrices();

   // @ts-ignore
   const sortedBalances = useMemo(() => {
      return balances.filter((balance: WalletBalance) => {
         const balancePriority = getPriority(balance.blockchain);
         // @ts-ignore
         if (lhsPriority > -99) {
            if (balance.amount <= 0) {
               return true;
            }
         }
         return false
      }).sort((lhs: WalletBalance, rhs: WalletBalance) => {
         const leftPriority = getPriority(lhs.blockchain);
         const rightPriority = getPriority(rhs.blockchain);
         if (leftPriority > rightPriority) {
            return -1;
         } else if (rightPriority > leftPriority) {
            return 1;
         }
      });
   }, [balances, prices]);

   const formattedBalances = useMemo(() => sortedBalances.map((balance: WalletBalance) => {
         return {
            ...balance,
            formatted: balance.amount.toFixed()
         }
      })
   )

   const rows = useMemo(() => formattedBalances.map((balance: FormattedWalletBalance, index: number) => {
      const usdValue = prices[balance.currency] * balance.amount;
      return (
         <WalletRow
            className={classes.row}
            key={index}
            amount={balance.amount}
            usdValue={usdValue}
            formattedAmount={balance.formatted}
         />
      )
   }), [formattedBalances])

   return (
      <div {...rest}>
         {rows}
      </div>
   )
}