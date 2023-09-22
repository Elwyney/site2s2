import Header from './components/header';
import Home from './pages/Home';
import './style.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts.jsx";
import Loader from './components/home/loader';


function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={true ? <Home /> : <Loader />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App


