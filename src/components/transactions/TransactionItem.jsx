import { useGlobalState } from "../../context/GlobalState";
import './TransactionItem.css'
function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();
  return (
    <>
      <div>
        <span className="hora">{transaction.hora}</span>
      </div>
      <li className={`${transaction.amount < 0 ? "bg-red-500 text-white px-3e py-1 rounded-lg mb-2 w-full flex justify-between items-center" : "bg-green-600 text-white px-3e py-1 rounded-lg mb-2 w-full flex justify-between items-center"}`}>
        <p className="text-sm ml-2">{transaction.description}</p>
        <div>
          <span>$ {transaction.amount}</span>
          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
            className={`${transaction.amount < 0 ? "bg-green-800 px-1 py-0.5 ml-2 mr-2 rounded-lg": "bg-red-800 px-1 py-0.5 ml-2 mr-2 rounded-lg" }`}
          >
            X
          </button>
        </div>
      </li>
    </>
  );
}

export default TransactionItem;
