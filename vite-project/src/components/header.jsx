import logo from '../../src/assets/image/БЕЗДВИЖЕНИЯ.svg';
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <NavLink className="logo" to="/">
                            <img src={logo} alt="БезДвижения" />
                        </NavLink>
                        <nav className='navigation'>
                            <NavLink to="/aboutUs" activeClassName="active">О нас</NavLink>
                            <NavLink to="/contacts" activeClassName="active">Контакты</NavLink>
                            <NavLink to="/faq" activeClassName="active">FAQ</NavLink>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;