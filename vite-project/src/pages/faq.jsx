import { useState } from'react';
import './faq.scss';
import icon_1 from './icon_1.png';
import icon_2 from './icon_2.png'

const Faq = () => {
  const [isActive, setIsActive] = useState(true); 

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  let active = isActive ? 'accordion-inactive' : 'accordion-active';
  let activeBlock = isActive ? 'faq_block_second_inactive' :  'faq_block_second'; 

  return (
    <>
      <div className="container">
        <div className="faq">
          <div className="faq_block_first">
            <h1>Что такое ваш сайт знакомств?</h1>
            <img className='icon_1' src={icon_1} alt="icon_1" />
          </div>
          <div className={activeBlock}> 
            <h2 > Я беспокоюсь о своей приватности. Как вы обеспечиваете анонимность на сайте?</h2>
               <p className={active}>
               Ответ: Мы предоставляем опции для анонимной регистрации и общения. Ваша личная информация остается защищенной, и вы решаете, что и когда делиться с другими пользователями.
                </p> 
            <img onClick={handleToggle} className='icon_1' src={icon_2} alt="icon_2" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq;
