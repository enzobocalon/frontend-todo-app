import './App.css';
import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';
import ModesProvider from './context/Modes';
import UpdateCheckProvider from './context/UpdateCheck';
import UpdateDataProvider from './context/UpdateData';

function App() {
  return (
    <UpdateDataProvider>
      <UpdateCheckProvider>
      <ModesProvider>
        <Header />
        <Todo />
      </ModesProvider>
      </UpdateCheckProvider>
    </UpdateDataProvider>
  );
}

export default App;
