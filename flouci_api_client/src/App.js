import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Payment from './Payment';
import Success from './Success';
import Fail from './Fail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Payment />} />
      <Route path="/" element={<Success />} />
      <Route path="/" element={<Fail />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
