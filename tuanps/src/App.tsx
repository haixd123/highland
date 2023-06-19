import React, { useEffect, useState } from 'react';
import './App.css';
import Context from './context';
import BrowerRouter from './routes';
import { Button } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <Context.Provider value={{
      isLoading: false,
    }}>
      <BrowerRouter />
    </Context.Provider>
  );
}

export default App;
