import Examples from './components/Examples';
import { ModalContextProvider } from './hooks/useModal';

function App() {
  return (
    <ModalContextProvider>
      <Examples />
    </ModalContextProvider>
  );
}

export default App;
