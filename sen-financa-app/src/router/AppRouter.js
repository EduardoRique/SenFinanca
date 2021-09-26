import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddTransaction from '../components/AddTransactions';
import ResumeTransaction from '../components/ResumeTransactions';
import TransactionsList from '../components/TransactionsList';
import EditTransaction from '../components/EditTransaction';
import useLocalStorage from '../hooks/useLocalStorage';
import TransactionsContext from '../context/TransactionsContext';

const AppRouter = () => {
    const [transactions, setTransactions] = useLocalStorage('transactions', []);
  
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="main-content">
            <TransactionsContext.Provider value={{ transactions, setTransactions }}>
              <Switch>
                <Route component={TransactionsList} path="/" exact={true} />
                <Route component={AddTransaction} path="/add" />
                <Route component={ResumeTransaction} path="/resume" />
                <Route component={EditTransaction} path="/edit/:id" />
                <Route component={() => <Redirect to="/" />} />
              </Switch>
            </TransactionsContext.Provider>
          </div>
        </div>
      </BrowserRouter>
    );
  };

export default AppRouter;