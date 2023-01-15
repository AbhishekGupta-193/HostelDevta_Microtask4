import logo from './logo.svg';
import './App.css';
import { Landing } from './components/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MT1 } from './components/MT1';
import { MT2 } from './components/MT2';
import { MT3 } from './components/MT3';
import { Error } from './components/Error';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route element={<Landing/>} path="/"/>
      <Route element={<MT1/>} path="/mt1"/>
      <Route element={<MT2/>} path="/mt2"/>
      <Route element={<MT3/>} path="/mt3"/>
      <Route element={<Error/>} path="/*"/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
