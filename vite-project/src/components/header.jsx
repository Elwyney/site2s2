import logo from '../../src/assets/image/БЕЗДВИЖЕНИЯ.svg';
const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <a className="logo" href="">
                            <img src={logo} alt="БезДвижения" />
                        </a>
                        <nav className='navigation'>
                            <a href="">О нас</a>
                            <a href="">Контакты</a>
                            <a href="">FAQ</a>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;