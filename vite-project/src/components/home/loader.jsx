import { useSelector, useDispatch } from 'react-redux';
import { updateCorrentPage } from '../../counterSlice';
const Loader = () => {
    const dispatch = useDispatch(); // Отправляем действия
    setTimeout(() => dispatch(updateCorrentPage({ isActivePage: "chat" })), 2000)
    return (
        <>
            <div className="loader">
                <span>Идет поиск...Скоро вы будите перенаправлены</span>
                <a href="">Отменить поиск</a>
            </div>
        </>
    )
}
export default Loader;