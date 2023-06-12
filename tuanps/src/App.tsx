import type { FC } from 'react';
import './App.css';
import Context from './context';
import BrowerRouter from './routes';

const App : FC = () => {
  return (
    <Context.Provider value={{
      isLoading: false,
    }}>
      <BrowerRouter />
    </Context.Provider>
  );
}

export default App;
