import React, { useContext } from 'react';
import _ from 'lodash';
import { Card } from 'react-bootstrap';
import TransactionsContext from '../context/TransactionsContext';

const ResumeTransaction = ({ 
    entradas,
    saidas,
    total
}) => {

    const { transactions, setTransactions } = useContext(TransactionsContext);

    entradas = !_.isEmpty(transactions) ? transactions.map(transaction => transaction.type === "Entrada" ? 
    Number(transaction.value) : 0).reduce((a, b) => a + b) : 0;
    saidas = !_.isEmpty(transactions) ? transactions.map(transaction => transaction.type === "Saida" ? 
    Number(transaction.value) : 0).reduce((a, b) => a + b): 0;
    total = entradas - saidas;

    return (
        <Card style={{ width: '18rem' }} className="resume">
        <Card.Body>
            <Card.Title className="resume-title">Resumo</Card.Title>
            <div className="resume-details">
            <div>Entradas: {entradas}</div>
            <div>Saidas: {saidas} </div>
            <div>Total: {total.toFixed(2)} </div>
            </div>
        </Card.Body>
        </Card>
    );
};

export default ResumeTransaction;