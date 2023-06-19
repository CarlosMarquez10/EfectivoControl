import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";
import { ResponsiveContainer } from "recharts";

function ExpensChart() {
  const { transactions } = useGlobalState();

  const totalIngreso = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalGastos =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalgastosporcentage = Math.round((totalGastos / totalIngreso) * 100);
  const totalingresoporcentage = 100 - totalgastosporcentage;

  return (
    <ResponsiveContainer width="100%" height={360}>
      <VictoryPie
        
        colorScale={["#e74c3c", "#2ecc71"]}
        data={[
          { x: "Gastos", y: totalgastosporcentage },
          { x: "Ingresos", y: totalingresoporcentage },
        ]}
        animate={{
          duration: 200,
        }}
        labelComponent={
          <VictoryLabel
            angle={117}
            style={{
              fill: "white",
              fontSize: 20,
            }}
          />
        }
      />
    </ResponsiveContainer>
  );
}

export default ExpensChart;
