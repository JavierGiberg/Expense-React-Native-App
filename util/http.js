import axios from "axios";

const BACKEND_URS = "https://expenseapp-52610-default-rtdb.firebaseio.com";
export async function storeExpense(expenseData) {
  const reponse = await axios.post(BACKEND_URS + "/expenses.json", expenseData);
  const id = reponse.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URS + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Data(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export async function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URS + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URS + `/expenses/${id}.json`);
}
