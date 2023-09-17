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
            <main class="main-content">
                <div class="container">
                    <div className="intro-section-container">
                        <div class="intro-section">
                            <h1>В нашем мире анонимных знакомств каждое лицо - загадка, каждый человек - история.</h1>
                            <span>Помните, ответственность за вашу безопасность лежит на вас. Не передавайте личные данные и будьте осторожны.</span>
                        </div>
                        <img class="main-image" src={img} alt="" />
                    </div>
                    <form class="search-form" action="">
                        <div class="form-section">
                            {
                                genderOptions.map(item => <GenderOptions title={item} genderFunc={setGender} />)
                            }
                        </div>
                        <input class="search-button" type="button" value="Поиск" />
                    </form>
                </div>
            </main>

        </>
    )
}
export default Home;