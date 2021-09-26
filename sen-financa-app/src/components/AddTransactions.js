import React, { useContext } from 'react';
import TransactionForm from './TransactionForm';
import TransactionsContext from '../context/TransactionsContext';

const AddTransaction = ({ history }) => {

    const { transactions, setTransactions } = useContext(TransactionsContext);

    const handleOnSubmit = (transaction) => {
        setTransactions([transaction, ...transactions]);
        history.push('/');
    };

    return (
        <React.Fragment>
        <TransactionForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddTransaction;