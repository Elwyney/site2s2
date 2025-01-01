import { useState } from "react";
import '../pages/chat.scss'
const Chat = () => {
    const [isActive, setActive] = useState(false);
    return (
        <>
            <div className="chat-container">
                <div className="container">
                    <div className="chat">
                        <div>
                            <a href="">Завершить чатт</a>
                            <a href="">Пожаловаться</a>
                        </div>
                        <div className="set-message">
                            <div className="message">
                                <span>Администратор</span>
                                <span>Моменты первого контакта могут изменить вашу жизнь. Сделайте этот первый шаг и отправьте сообщение.</span>
                            </div>
                        </div>
                        <form className="chat-form" action="">
                            <input onClick={() => setActive((prew) => true)} className={"text-input" + (isActive ? " size" : "")}
                                type="text" placeholder="Введите ваше сообшение" />
                            <input className="submit-button" type="button" value="Отправить" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chat;


