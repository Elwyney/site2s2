import Header from './components/header';
import './style.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts.jsx";
import Loader from './components/home/loader';
import Faq from './pages/faq.jsx';
import Chat from './pages/chat.jsx';
import Home from './pages/home.jsx'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
function App() {
    const dataGlobal = useSelector((state) => state.counter.isActivePage)
    console.log(dataGlobal);

    const [page, setPage] = useState([
        {
            id: 1,
            page: <Home />,
            type: 'home'
        },
        {
            id: 2,
            page: <Loader />,
            type: 'loader'
        },
        {
            id: 3,
            page: <Chat />,
            type: 'chat'
        }
    ])

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={page.find(({ type }) => type === dataGlobal).page} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/faq" element={<Faq />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App


