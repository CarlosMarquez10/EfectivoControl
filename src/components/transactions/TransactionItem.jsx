import { useGlobalState } from "../../context/GlobalState";

function TransactionItem({transaction}) {
    const { deleteTransaction } = useGlobalState();
  return (
    <li className="bg-zinc-600 text-white px-3e py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm ml-2">{transaction.description}</p>
     <div>
     <span>$ {transaction.amount}</span>
      <button
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
        className="bg-red-800 px-1 py-0.5 ml-2 mr-2 rounded-lg"
      >
        X
      </button>
     </div>
    </li>
  );
}

export default TransactionItem;
