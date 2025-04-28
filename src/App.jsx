import { useState } from "react";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    description: "",
    category: "",
    amount: "",
    todayDate: new Date().toISOString().slice(0, 10),
  });
  const [searchTerm, setSearchTerm] = useState(""); // <-- Added

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.name && formData.amount && formData.category && formData.description) {
      const newExpense = { ...formData, id: Date.now() };
      setExpenses([...expenses, newExpense]);
      setFormData({
        name: "",
        birthDate: "",
        description: "",
        category: "",
        amount: "",
        todayDate: new Date().toISOString().slice(0, 10),
      });
    }
  }

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Expense Tracker 💸</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="birthDate"
          placeholder="Birth Date"
          value={formData.birthDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Expense Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Expense Category"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <input
          type="date"
          name="todayDate"
          value={formData.todayDate}
          disabled
        />
        <button type="submit">Submit</button>
      </form>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <h2>Expense List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount ($)</th>
            <th>Today's Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.birthDate}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{parseFloat(expense.amount).toFixed(2)}</td>
              <td>{expense.todayDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
