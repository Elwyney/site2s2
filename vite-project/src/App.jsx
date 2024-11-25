import Header from './components/header';

import './style.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts.jsx";
import Loader from './components/home/loader';
import Faq from './pages/faq.jsx';
import Chat from './pages/chat.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>

                    <Route path="/" element={true ? <Chat /> : <Loader />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/faq" element={<Faq />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App


