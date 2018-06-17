import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import './index.css';
import List from './components/list/List'

const App = () => {
  const title = 'React Coin';
  
  return (
    <div>
      <Header />
      <List/>
      <p>Up to date crypto currencies financial data</p>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
