import { useState } from "react";

const Chat = () => {
    const [isActive, setActive] = useState(false);
    return (
        <>
            <div className="chat-container">
                <div className="container">
                    <div className="chat">
                        <div>
                            <a className="finish-chat" href="">Завершить чат</a>
                            <a className="complain"  href="">Пожаловаться</a>
                        </div>
                        <div className="set-message">
                        <div className="message">
                            <span>Администратор</span>
                            <span>Моменты первого контакта могут изменить вашу жизнь. Сделайте этот первый шаг и отправьте сообщение.</span>
                        </div>
                        <div className="message">
                            <span>Администратор</span>
                            <span>Моменты первого контакта могут изменить вашу жизнь. Сделайте этот первый шаг и отправьте сообщение.</span>
                        </div>
                        </div>

                        <SignIn/>

{/*                         <form action="">
                            <input onClick={() => setActive((prew) => true)} className={"text-input" + (isActive ? " size" : "")}
                                type="text" placeholder="Введите ваше сообшение" />
                            <input className="submit-button" type="button" value="Отправить" />
                        </form> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chat;


const SignIn = () => {
    return (
        <div className="info-person">
                <hr />
            <div className="info-person-inner">
                <div className="info-person-inner-gender">
                    <div className="info-person-inner-gender-your">
                        <label htmlFor="">Ваш пол</label> <br />
                        <button>M</button>
                        <button>Ж</button>
                    </div>
                    <div className="info-person-inner-gender-interlocutor">
                        <label htmlFor="">Пол собеседника</label> <br />
                        <button>M</button>
                        <button>Ж</button>
                    </div>
                </div>
                <div className="info-person-inner-your-name">
                    <label className="info-person-inner-your-name-label"  htmlFor="">Ваше имя</label> <br />
                    <input className="info-person-inner-your-name-input" type="text" placeholder="Введите ваше имя"/>
                </div>
                <div className="info-person-inner-your-name">
                    <button id="info-person-inner-button">Поиск</button>
                </div>
                <div>
                </div>
            </div>
            <hr />
        </div>
    )
}