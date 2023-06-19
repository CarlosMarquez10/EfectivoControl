import { GlobalProvider } from "./context/GlobalState";

import Balance from "./components/Balance";
import Inconexpenses from "./components/Inconexpenses";
import TransacionForm from "./components/transactions/TransacionForm";
import TransactionList from "./components/transactions/TransactionList";
import ExpensChart from "./components/ExpensChart";


function App() {
  return (
    <GlobalProvider>
      <div className="bg-white text-white h-screen flex justify-center items-center">
       <div className="container h-screen w-1/1">
       <div className="bg-zinc-800 p-10 rounded-lg m-8 flex flex-wrap gap-x-2 mb-5">
          <div>
            <h1 className="text-lg text-pink-400 font-bold text-center mb-3">Day Sweet</h1>
            <Inconexpenses />
            <Balance />
            <TransacionForm />
          </div>
          <div className="flex flex-col flex-1 ">
            <ExpensChart/>
            <TransactionList />
          </div>
        </div>
       </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
