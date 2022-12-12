import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { endGame } from '../store/slices/logicSlices';
import cl from '../pages/Game/Game.module.scss';

const CountDown = ({ hours = 0 , minutes = 3, seconds = 0}) => {
    const dispatch = useDispatch();
    const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

    useEffect(() => {
        if (h === 0 && m === 0 && s === 0) {
            dispatch(endGame());
        }
    }, [h, m, s, dispatch]);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, [dispatch]);

    const tick = () => {
        setTime((prev) => {
            if (prev[1] === 0 && prev[2] === 0) {
                return [prev[0] - 1, 59, 59];
            } else if (prev[2] === 0) {
                return [prev[0], prev[1] - 1, 59];
            } else {
                return [prev[0], prev[1], prev[2] - 1];
            }
        });
    };


    return (
        <div className={cl.game_time}>
            До окончания игры:
            {`  ${h.toString().padStart(2, '0')}:${m
                .toString()
                .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}
        </div>
    );
};

export default CountDown;