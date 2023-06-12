import './App.css';
import Context from './context';
import BrowerRouter from './routes';

function App() {
  return (
    <Context.Provider value={{
      isLoading: false,
    }}>
      <BrowerRouter />
    </Context.Provider>
  );
}

export default App;
