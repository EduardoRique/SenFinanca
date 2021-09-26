import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const TransactionForm = (props) => {

  const [transaction, setTransaction] = useState(() => {
    return {
        transactionname: props.transaction ? props.transaction.transactionname : '',
        type: props.transaction ? props.transaction.type : '',
        category: props.transaction ? props.transaction.category : '',
        value: props.transaction ? props.transaction.value : '',
        date: props.transaction ? props.transaction.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { transactionname, type, value, category } = transaction;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [transactionname, type, value, category];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const transaction = {
        id: uuidv4(),
        transactionname,
        type,
        value,
        category,
        date: new Date()
      };
      props.handleOnSubmit(transaction);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
        case 'value':
            if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setTransaction((prevState) => ({
                ...prevState,
                [name]: value
            }));
            }
            break;
        default:
            setTransaction((prevState) => ({
            ...prevState,
            [name]: value
            }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="transactionname"
            value={transactionname}
            placeholder="Digite o titulo da transação"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="type">
          <Form.Label>Tipo da Transação</Form.Label>
          <Form.Control
            as="select"
            className="input-control"
            name="type"
            value={type}
            placeholder="Digite o tipo da transação"
            onChange={handleInputChange.bind(this)}
          >
              <option>Tipo</option>
              <option value="Entrada">Entrada</option>
              <option value="Saida">Saida</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            as="select"
            className="input-control"
            name="category"
            value={category}
            placeholder="Digite a categoria da transação"
            onChange={handleInputChange.bind(this)}
          >
              <option>Categoria</option>
              <option value="PIX">PIX</option>
              <option value="TED">TED</option>
              <option value="DOC">DOC</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="value">
          <Form.Label>Valor da Transação</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="value"
            value={value}
            placeholder="Digite o valor da transação"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TransactionForm;