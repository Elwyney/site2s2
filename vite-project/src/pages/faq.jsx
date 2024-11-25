import icon_1 from './icon_1.png';
import icon_2 from './icon_2.png'

const Faq = () => {
    return (
        <>
            <div className="container">
                <div className="faq">
                    <div className="faq_block">
                        <div>
                            <span>Что такое ваш сайт знакомств?</span>
                            <img className='icon_1' src={icon_1} alt="icon_1" />
                        </div>
                    </div>
                    <div className="faq_block">
                        <div>
                            <span>Я беспокоюсь о своей приватности. Как вы обеспечиваете анонимность на сайте?</span>
                            <img className='icon_1' src={icon_2} alt="icon_2" />
                        </div>

                        <p>Ответ: Мы предоставляем опции для анонимной регистрации и общения. Ваша личная информация остается защищенной, и вы решаете, что и когда делиться с другими пользователями.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Faq;