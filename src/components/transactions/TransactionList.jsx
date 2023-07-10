import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";
import "./TransactionList.css";
import { AiFillFileExcel } from "react-icons/ai";
import { exportExcel } from "./excelUtils.jsx";
import { useCallback } from "react";


function TransactionList() {
  const { transactions } = useGlobalState();

  const handleDownloadExcel = useCallback(() => {
    exportExcel(transactions);
  }, [transactions]);


  return (
    <>
      <div className="containertitle">
        <h3 className="text-slate-300 text-xl font-bold block mb-3 title">
          Historial
        </h3>
        <button className="btndescargaExcel" onClick={handleDownloadExcel}>
          <AiFillFileExcel className="btndownload" />
        </button>
      </div>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
