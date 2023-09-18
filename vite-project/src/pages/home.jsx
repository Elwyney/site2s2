import { useState } from 'react';
import img from '../../src/assets/image/pngwing 1.png';
import GenderOptions from '../components/home/gender';

const Home = () => {
    const genderOptions = [
        {
            id: 1,
            title: 'Ваш пол',
        },
        {
            id: 2,
            title: 'Пол собеседника',
        },
    ]
    const [gender, setGender] = useState({ man: null, woman: null })
    return (
        <>
            <main className="main-content">
                <div className="container">
                    <div className="intro-section-container">
                        <div className="intro-section">
                            <h1>В нашем мире анонимных знакомств каждое лицо - загадка, каждый человек - история.</h1>
                            <span>Помните, ответственность за вашу безопасность лежит на вас. Не передавайте личные данные и будьте осторожны.</span>
                        </div>
                        <img className="main-image" src={img} alt="" />
                    </div>
                    <form className="search-form" action="">
                        <div className="form-section">
                            {
                                genderOptions.map(item => <GenderOptions title={item} genderFunc={setGender} />)
                            }
                        </div>
                        <input className="search-button" type="button" value="Поиск" />
                    </form>
                </div>
            </main>

        </>
    )
}
export default Home;