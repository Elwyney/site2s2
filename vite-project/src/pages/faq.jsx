<<<<<<< HEAD
import icon_1 from './icon_1.png';
import icon_2 from './icon_2.png'

const Faq = () => {
    return (
        <>
            <div className="container">
                <div className="faq">
                    <div className="faq_block_first">
                        <h1>Что такое ваш сайт знакомств?</h1>
                        <img className='icon_1' src={icon_1} alt="icon_1" />
                    </div>
                    <div className="faq_block_second">
                        <h2>Я беспокоюсь о своей приватности. Как вы обеспечиваете анонимность на сайте?</h2>
                        <p>Ответ: Мы предоставляем опции для анонимной регистрации и общения. Ваша личная информация остается защищенной, и вы решаете, что и когда делиться с другими пользователями.</p>
                        <img className='icon_1' src={icon_2} alt="icon_2" />
                    </div>
                </div>
            </div>
        </>
    )
}

=======
const Faq = () => {
    return (
        <>
            <div className="container"></div>
        </>
    )
}
>>>>>>> 3523a8841ce5b11c254d4d0ef6223dcd1bd2f43e
export default Faq;