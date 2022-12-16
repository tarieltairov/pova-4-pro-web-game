import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cl from '../pages/Game/Game.module.scss';

let timer = [0, 1, 0];
let timerID;

const CountDown = () => {
    const [time, setTime] = useState(timer);
    const { game } = useSelector((state) => state.logic);

    useEffect(() => {
        if (game === 'started') {
            timer = [0, 1, 0];
            setTime([0, 1, 0]);
        }
    }, [game]);


    useEffect(() => {
        clearInterval(timerID);
        timerID = setInterval(() => tick(), 1000);
    }, []);

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

        if (timer[1] === 0 && timer[2] === 0) {
            timer = [timer[0] - 1, 59, 59];
        } else if (timer[2] === 0) {
            timer = [timer[0], timer[1] - 1, 59];
        } else {
            timer = [timer[0], timer[1], timer[2] - 1];
        }

    };

    return (
        <div className={cl.game_time}>
            До окончания игры:<br />
            <span>
                {`  ${time[0].toString().padStart(2, '0')}:${time[1].toString().padStart(2, '0')}:${time[2].toString().padStart(2, '0')}`}
            </span>
        </div>
    );
};

export default CountDown;