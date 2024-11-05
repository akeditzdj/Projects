import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    return storedTransactions || [];
  });
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [editId, setEditId] = useState(null);

  //Load Transactions from localstorage on component mount
  /* useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, []);*/

  //save transactions
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));

    const totalIncome = transactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, cur) => acc + cur.amount, 0);
    const totalExpense = transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, cur) => acc + Math.abs(cur.amount), 0);

    setIncome(totalIncome);
    setExpense(totalExpense);
    setBalance(totalIncome - totalExpense);
  }, [transactions]);

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction = {
      id: editId || Date.now(),
      description,
      amount: parseFloat(amount),
    };

    if (editId) {
      //Update
      setTransactions(
        transactions.map((transaction) =>
          transaction.id === editId ? newTransaction : transaction
        )
      );
      setEditId(null);
    } else {
      //Add
      setTransactions([...transactions, newTransaction]);
    }

    setDescription("");
    setAmount("");
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const handleEditTransaction = (id) => {
    const trans = transactions.find((transaction) => transaction.id === id);
    setDescription(trans.description);
    setAmount(trans.amount.toString());
    setEditId(id);
  };
  return (
    <>
      <div className="App">
        <h3>Personal Finance Tracker</h3>
        <div className="balance">
          <h2>Balance : {balance.toFixed(2)}</h2>

          <div className="summary">
            <div>
              <h3>Income</h3>
              <p className="income">Rs. {income.toFixed(2)}</p>
            </div>

            <div>
              <h3>Expense</h3>
              <p className="expense">Rs. {expense.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleAddTransaction}>
          <div>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </div>
          <div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
            />
          </div>
          <button type="submit">Add Transaction</button>
        </form>

        <div className="transactions">
          <h3>Transactions</h3>
          <ul>
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className={transaction.amount > 0 ? `income` : "expense"}
              >
                <span>
                  {transaction.description} - Rs.
                  {Math.abs(transaction.amount.toFixed(2))}
                </span>

                <div className="actions">
                  <button
                    onClick={() => {
                      handleEditTransaction(transaction.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTransaction(transaction.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
