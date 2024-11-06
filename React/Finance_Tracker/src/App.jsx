import { useState, useEffect } from "react";
import "./App.css";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Save transactions to localStorage and calculate balance, income, expense
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

  // Toggle Modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    if (isModalVisible) {
      // Reset input fields when modal is closed
      setDescription("");
      setAmount("");
      setEditId(null);
    }
  };

  // Add or update transaction
  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!description || !amount) return; // Validation for empty fields

    const newTransaction = {
      id: editId || Date.now(),
      description,
      amount: parseFloat(amount),
    };

    if (editId) {
      // Update existing transaction
      setTransactions(
        transactions.map((transaction) =>
          transaction.id === editId ? newTransaction : transaction
        )
      );
      setEditId(null);
    } else {
      // Add new transaction
      setTransactions([...transactions, newTransaction]);
    }

    toggleModal(); // Close the modal after submission
  };

  // Edit transaction
  const handleEditTransaction = (id) => {
    const transaction = transactions.find((trans) => trans.id === id);
    setDescription(transaction.description);
    setAmount(transaction.amount.toString());
    setEditId(id);
    toggleModal(); // Open the modal for editing
  };

  // Delete transaction
  const handleDeleteTransaction = (id) => {
    const isConfirmed = confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
      );
    }
  };

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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

      <div className="toggle-modal">
        <button onClick={toggleModal}>Add Txn</button>
      </div>

      <div className="transactions">
        <div className="table-header">
          <h3>Transactions</h3>
          <input
            type="search"
            placeholder="Filter your transactions"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Transaction Name</th>
              <th>Transaction Amount</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <tr
                key={transaction.id}
                className={transaction.amount > 0 ? "income" : "expense"}
              >
                <td>{index + 1}</td>
                <td>{transaction.description}</td>
                <td>Rs. {Math.abs(transaction.amount.toFixed(2))}</td>
                <td>
                  <button onClick={() => handleEditTransaction(transaction.id)}>
                    Edit
                  </button>
                </td>
                <td>
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

      {/* Modal */}
      {isModalVisible && (
        <div className="modal">
          <div className="modal-title">
            <h4>{editId ? "Edit Transaction" : "Add Transaction"}</h4>
            <button onClick={toggleModal}>X</button>
          </div>
          <div className="modal-body">
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
              <div>
                <button type="submit">
                  {editId ? "Update Transaction" : "Add Transaction"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
