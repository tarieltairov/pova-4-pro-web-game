import React from 'react';
import cl from './StartModal.module.scss';

const StartModal = ({ setOpenCreateModal, setOpenStartModal }) => {

    return (
        <div className={cl.modal_container}>
            <div className={cl.modal}>
                <p className={cl.description}>Уничтожьте все мишени! </p>
                <div className={cl.btn_container}>
                    <button className={cl.start_btn}
                        onClick={() => { setOpenCreateModal(true); setOpenStartModal(false) }}>НАЧАТЬ ИГРУ</button>
                </div>
                <div className={cl.blocks_container}>
                    <div className={cl.block}>
                        <h3>Правила</h3>
                        <hr />
                        <p>1. Набирай очки</p>
                        <p>2. Попади в TОП10 игроков</p>
                        <p>3. Делись результатом в соц.сетях</p>
                        <p>4. Выиграй POVA 4 Pro!</p>
                    </div>
                    <div className={cl.block}>
                        <h3>Призы</h3>
                        <hr />
                        <p>TОП10 игроков получат по POVA 4 Pro! <br/>Итоги будут объвлены 28 декабря</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartModal;