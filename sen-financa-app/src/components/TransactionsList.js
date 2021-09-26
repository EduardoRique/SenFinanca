import React, { useContext, useState, useEffect } from 'react';
import _ from 'lodash';
import Transaction from './Transaction';
import TransactionsContext from '../context/TransactionsContext';

const TransactionsList = () => {

  const { transactions, setTransactions } = useContext(TransactionsContext);

  const [filterType, setFilterType] = useState('')
  const [filterCategory, setFilterCategory] = useState('')
  const [sortedTransactions, setSortedTransaction] = useState(transactions)

  const handleRemoveTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  useEffect(() => {
    const result = transactions.filter(transaction => 
      (transaction.type.toUpperCase().includes(filterType.toUpperCase()) || filterType === '') &&
      (transaction.category.toUpperCase().includes(filterCategory.toUpperCase()) || filterCategory === ''));
      setSortedTransaction(result);
      console.log(result);
  }, [filterType, filterCategory]);

  return (
    <React.Fragment>
      <div className="singleRowCardBody">
        <div className="rowCardBody mt-3">
            <label className="cardLabel idLabel"> Filtrar por Tipo </label>
            <input id="filterType"
              name="filterType"
              type="text"
              value={filterType}
              placeholder="Digite o tipo"
              onChange={event => setFilterType(event.target.value)}
            />
            <label className="cardLabel idLabel ml-5"> Filtrar por Categoria </label>
            <input id="filterCategory"
              name="filterCategory"
              type="text"
              value={filterCategory}
              placeholder="Digite a categoria"
              onChange={event => setFilterCategory(event.target.value)}
            />
        </div>
      </div>
      <div className="transaction-list">
        {!_.isEmpty(sortedTransactions) ? (
          sortedTransactions.map((transaction) => (
            <Transaction key={transaction.id} {...transaction} handleRemoveTransaction={handleRemoveTransaction} />
          ))
        ) : (
          <p className="message">No transactions available.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default TransactionsList;