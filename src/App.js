import React from 'react';
import Layout from './hoc/Layout/Layout';
import Screen from './component/Screen/Screen';
import ButtonPanel from './component/ButtonPanel/ButtonPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <h3 style={{marginLeft: '25px' }}> FEST@C MINI CALCULATOR</h3>
        <Screen />
        <ButtonPanel />
      </Layout>
    </div>
  );
}

export default App;
