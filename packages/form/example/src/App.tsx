import logo from './logo.svg';
import './App.css';
import { Sections } from '@mui-builder/form';

function App() {
  return (
    <div>
      <Sections sections={[1, 2, 3, 4, 5, 6]} />
    </div>
  );
}

export default App;
