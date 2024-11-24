import Header from './components/header';
import Home from './pages/Home';
import './style.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts.jsx";
import Loader from './components/home/loader';
import Chat from './pages/Chat';
import Faq from './pages/faq.jsx';



function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={true ? <Home /> : <Loader />} />
<<<<<<< HEAD
                    <Route path="/contacts" element={<Contacts />}/>
                    <Route path="/faq" element={<Faq />}/>
=======
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/faq" element={<Faq />} />
>>>>>>> 3523a8841ce5b11c254d4d0ef6223dcd1bd2f43e
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App


