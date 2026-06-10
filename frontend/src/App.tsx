import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemForm from './pages/ItemForm';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
