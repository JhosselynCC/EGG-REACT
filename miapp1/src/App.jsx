
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Ejemplo } from './components/Ejercicio1/Ejemplo';
import AppE2 from "./components/Ejercicio2/AppE2";
import AppE3 from './components/Ejercicio3/AppE3';
import AppE4 from './components/Ejercicio4/AppRutas4';
import Main1 from './components/Ejercicio4/Main1';
import Main2 from './components/Ejercicio4/Main2';
import Dinamic from './components/Ejercicio4/Dinamic';
import AppE5 from './components/Ejercicio5/AppE5';
import Navbar from './components/Navbar';
import ApiPersonajes from './components/Ejercicio6/ApiPersonajes';
function App() {


  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<h1> Probando react egg Para ver los ejercicios de la guia de React</h1>} />
          <Route path="/1" element={<Ejemplo />} />
          <Route path="/2" element={<AppE2 />} />
          <Route path="/3" element={<AppE3 />} />
          <Route path="/4" element={<AppE4 />} />

          <Route path="/4/Main1" element={<Main1 />} />
          <Route path="/4/Main2" element={<Main2 />} />
          <Route path="/Dinamic/:Id" element={<Dinamic/>} />

          <Route path="/5" element={<AppE5 />} />
          <Route path="/6" element={<ApiPersonajes/>} />

        </Routes>

        <Navbar/>
        <Footer />
      </div>

    </BrowserRouter>

  )
}

export default App
