import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    VKShareButton,
    VKIcon,
} from 'react-share';
import { setShareModal } from '../../../store/slices/logicSlices';
import Loader from '../../Loader/Loader';
import cl from './ShareModal.module.scss';

const ShareModal = () => {
    const dispatch = useDispatch();
    const { shareData, loading } = useSelector((state) => state.logic);

    return (
        <div className={cl.shareModal}>
            {loading && <Loader />}
            <h2>Поделиться результатом в социальных сетях</h2>
            <div className={cl.icons_block}>
                <VKShareButton
                    url={shareData}
                    quote='youtube video'
                >
                    <VKIcon lightingColor={'white'} round={true}></VKIcon>
                </VKShareButton>
            </div>
            <button className={cl.close_btn} onClick={() => dispatch(setShareModal(false))}>Закрыть</button>
        </div>
    );
};

export default ShareModal;