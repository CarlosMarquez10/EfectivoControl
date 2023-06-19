import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const {transactions} = useGlobalState();

  const amounts = transactions.map(transaction => transaction.amount)

  const total = amounts.reduce((acc, item) =>(acc += item), 0).toFixed(2)

  return (
    <div className="flex justify-between">
      <h3 className="text-blue-400 font-bold mb-5">Balance</h3>
      <h3 className="text-2x1 font-bold">${total}</h3>{}
      
    </div>
  );
}

export default Balance;
