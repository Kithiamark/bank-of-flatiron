// Importing React and useState hook from the React library
import React, { useState } from 'react';

// Importing child components: TransactionTable, TransactionForm, and FilterBar
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import FilterBar from './components/FilterBar';

// Main component for the application
const App = () => {
  // State variables for managing transactions and search term
  const [transactions, setTransactions] = useState([
    // Example transactions array

      { date: new Date(2024, 3, 1), description: "Groceries", amount: 50.00, category: "Groceries" },
      { date: new Date(2024, 3, 2), description: "Gas", amount: 35.75, category: "Transportation" },
      { date: new Date(2024, 3, 3), description: "Restaurant", amount: 45.25, category: "Dining" },
      { date: new Date(2024, 3, 4), description: "Utilities", amount: 100.00, category: "Utilities" },
      { date: new Date(2024, 3, 5), description: "Shopping", amount: 75.50, category: "Shopping" },
  ]);
  const [searchTerm, setSearchTerm] = useState(''); // String to hold search term

  // Function to handle adding a new transaction
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]); // Appending new transaction to existing transactions array
  };

  // Filtering transactions based on search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Rendering JSX
  return (
    <div>
      {/* FilterBar component for filtering transactions */}
      <FilterBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* TransactionTable component to display transactions */}
      <TransactionTable transactions={filteredTransactions} />

      {/* TransactionForm component for adding new transactions */}
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
};

// Exporting the main App component
export default App;
