import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main1 from "./Main1";
import Main2 from "./Main2";



function AppE4() {
    return (
        <div>
            <Navbar />

            {/* <Routes>
                <Route path="4/0" element={<h1> Probando react egg </h1>} />
                <Route path="/4/Dinamic/Main1" element={<Main1 />} />
                <Route path="4/b" element={<Main2 />} />

            </Routes> */}

            <Footer />
        </div>
    )
}

export default AppE4