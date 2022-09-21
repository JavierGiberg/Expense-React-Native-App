import { useContext } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ExpenseContextProvider from "../store/expenses-contex";
import { ExpensesContext } from "../store/expenses-contex";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No expenses registered expenses found!"
    />
  );
}
export default AllExpenses;
