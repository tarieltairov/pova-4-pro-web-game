import html2canvas from 'html2canvas';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendScrinResult } from '../../../store/actions/logicActions';
import { closedResModal, setShareData, setShareModal } from '../../../store/slices/logicSlices';
import Loader from '../../Loader/Loader';
import cl from './ResultModal.module.scss';

const ResultModal = ({ setOpenResModal, setMakeDied, setOpenStartModal, isMobile }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { shootCount, rating, loading, user, game } = useSelector(state => state.logic);

    const closeModal = () => {
        dispatch(setShareData(null));
        dispatch(closedResModal());
        setOpenResModal(false);
        setMakeDied(null);
        setOpenStartModal(true);
    };

    const takeShotAndSave = () => {
        let zone = document.getElementById('scrin');
        html2canvas(zone).then(
            function (canvas) {
                // 1-ый вариант - для скачивания
                // let a = document.createElement("a");
                // a.href = canvas.toDataURL();
                // a.download = "Pova-4-Pro-game-result.png";
                // a.click();



                // 2-ой способ
                const url = canvas.toDataURL();
                const file = dataURLtoFile(url, 'result');
                // put file into form data
                const data = new FormData();
                data.append('file', file, file.name);
                dispatch(sendScrinResult(data));
                dispatch(setShareModal(true));
            });
    };


    const dataURLtoFile = (dataurl, filename) => {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n) {
            u8arr[n - 1] = bstr.charCodeAt(n - 1);
            n -= 1; // to make eslint happy
        }
        return new File([u8arr], filename, { type: mime });
    };

    return (
        <div className={isMobile && game === "completed" ? cl.forMobile : cl.modal}>
            {loading && <Loader />}
            <h4>Игра завершена!</h4>

            <p>Ваш счёт: {shootCount} баллов</p>
            <p className={cl.rating_label}>Общий рейтинг</p>

            <div className={cl.rating_block} id="scrin">
                {rating?.map((item, index) => (
                    <div className={(item.email === user.email) && (item.name === user.name) ? cl.current_user_rating : cl.user_rating} key={item.id}>
                        <p>{index + 1}.  {item.name}</p>
                        <p>{item.record}</p>
                    </div>
                ))}
            </div>

            <div className={cl.btns_block}>
                <button
                    className={cl.redirect_btn}
                    onClick={() => {
                        dispatch(setShareData(null));
                        navigate('/tecno');
                    }}
                >
                    На главную
                </button>
                <button className={cl.close_btn} onClick={() => closeModal()}>Закрыть</button>
            </div>
            <button className={cl.download_btn} onClick={() => takeShotAndSave()}>Поделиться</button>
        </div>
    );
};

export default ResultModal;