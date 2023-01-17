import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon,
    VKShareButton,
    VKIcon,
    OKShareButton,
    OKIcon,
    WhatsappIcon,
    WhatsappShareButton
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


                <FacebookShareButton
                    url={shareData}
                    quote='youtube video'
                >
                    <FacebookIcon lightingColor={'white'} round={true}></FacebookIcon>
                </FacebookShareButton>
                <WhatsappShareButton
                  url={shareData}
                    quote='youtube video'
                >
                    <WhatsappIcon lightingColor={'white'} round={true}></WhatsappIcon>
                </WhatsappShareButton>
                <TwitterShareButton
                    url={shareData}
                    quote='youtube video'
                >
                    <TwitterIcon lightingColor={'white'} round={true}></TwitterIcon>
                </TwitterShareButton>

                <TelegramShareButton
                    url={shareData}
                    quote='youtube video'
                >
                    <TelegramIcon lightingColor={'white'} round={true}></TelegramIcon>
                </TelegramShareButton>

                <VKShareButton
                    url={shareData}
                    quote='youtube video'
                >
                    <VKIcon lightingColor={'white'} round={true}></VKIcon>
                </VKShareButton>
                <OKShareButton
                    url={shareData}
                    quote='youtube video'
                >
                    <OKIcon lightingColor={'white'} round={true}></OKIcon>
                </OKShareButton>
            </div>
            <button className={cl.close_btn} onClick={() => dispatch(setShareModal(false))}>Закрыть</button>
        </div>
    );
};

export default ShareModal;