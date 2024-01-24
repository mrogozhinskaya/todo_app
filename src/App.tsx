import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { TodosProvider } from './context/TodosContext/TodosContext';

export const App: React.FC = () => {
  return (
    <div className="todoapp">
      <TodosProvider>
        <Header />

        <Main />

        <Footer />
      </TodosProvider>
    </div>
  );
};
