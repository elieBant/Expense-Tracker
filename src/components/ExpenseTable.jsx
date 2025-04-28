function ExpenseTable({ expenses }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  