import { useState } from 'react';
import img from '../../src/assets/image/pngwing 1.png';
import GenderOptions from '../components/home/gender';
import Loader from '../components/home/loader';
const Home = () => {
    const [genderOptions, setGenderOptions] = useState([
        {
            id: 1,
            title: 'Ваш пол',
            gender: null,
        },
        {
            id: 2,
            title: 'Пол собеседника',
            gender: null,
        },
    ])

    const hangleClick = (id, gender) => {
        setGenderOptions(genderOptions.map((option) =>
            option.id === id ? { ...option, gender: gender } : { ...option }))
    }
    console.log(genderOptions);
    return (
        <>
            <main className="main-content m">
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
                                genderOptions.map(item => <GenderOptions id={item.id} title={item} genderFunc={hangleClick} />)
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