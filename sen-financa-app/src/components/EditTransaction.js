import React, { useContext } from 'react';
import TransactionForm from './TransactionForm';
import { useParams } from 'react-router-dom';
import TransactionsContext from '../context/TransactionsContext';

const EditTransaction = ({ history }) => {

  const { id } = useParams();

  const { transactions, setTransactions } = useContext(TransactionsContext);

  const transactionToEdit = transactions.find((transaction) => transaction.id === id);

  const handleOnSubmit = (transaction) => {
    const filteredTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions([transaction, ...filteredTransactions]);
    history.push('/');
  };

  return (
    <div>
      <TransactionForm transaction={transactionToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditTransaction;