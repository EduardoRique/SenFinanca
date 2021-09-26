import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Transaction = ({
  id,
  transactionname,
  type,
  value,
  category,
  date,
  handleRemoveTransaction
}) => {
    const history = useHistory();
    return (
        <Card style={{ width: '18rem' }} className="transaction">
        <Card.Body>
            <Card.Title className="transaction-title">{transactionname}</Card.Title>
            <div className="transaction-details">
            <div>Tipo: {type}</div>
            <div>Categoria: {category} </div>
            <div>Valor: {value} </div>
            <div>Date: {new Date(date).toDateString()}</div>
            </div>
            <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
                Edit
            </Button>{' '}
            <Button variant="danger" onClick={() => handleRemoveTransaction(id)}>
            Delete
            </Button>
        </Card.Body>
        </Card>
    );
};

export default Transaction;