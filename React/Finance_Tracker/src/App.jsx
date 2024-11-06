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
        <h3 className="title">Personal Finance Tracker</h3>
        <div className="balance">
          <div className="balance-box">
            <h2>Balance</h2>
            <h2>{balance.toFixed(2)}</h2>
          </div>

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
      </div>

      <div className="transactions">
        <h3>Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Transection Name</th>
              <th>Traansection Amount</th>
              <th colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr
                key={transaction.id}
                className={transaction.amount > 0 ? `income` : "expense"}
              >
                <td>{index + 1}</td>
                <td>{transaction.description}</td>
                <td>
                  {" "}
                  Rs.
                  {Math.abs(transaction.amount.toFixed(2))}
                </td>

                <td>
                  {" "}
                  <button
                    onClick={() => {
                      handleEditTransaction(transaction.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDeleteTransaction(transaction.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="modal">
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
      </div>
    </>
  );
}

export default App;
