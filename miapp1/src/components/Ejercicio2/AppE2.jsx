//import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
//import Footer from './components/Ejercicio2/Footer';
import Main from './Main';
import Navbar from './Navbar';



function AppE2() {


    return (
       // <BrowserRouter>
            <div>
                <Navbar />
                <Main/>

                {/* <Routes>
                    <Route path="/e2" element={<h1> Probando Ejercicio 2 </h1>} />
                </Routes> */}
                <Footer />
            </div>

      //  </BrowserRouter>

    )
}

export default AppE2;
