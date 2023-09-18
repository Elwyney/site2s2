import Header from './components/header';
import Home from './pages/Home';
import './style.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contacts from "./pages/Contacts.jsx";


function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App


