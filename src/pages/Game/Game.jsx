import React, { useEffect, useState } from 'react';
import cl from './Game.module.scss'
import classNames from 'classnames';
import fireSound from '../../assets/audio/fire.mp3'
import metalSound from '../../assets/audio/metal.mp3'
import { useDispatch, useSelector } from 'react-redux';
import { allyFire, emptyFire, removeTarget, replenishment } from '../../store/slices/logicSlices';
import CreateUserModal from '../../components/Modals/CreateUserModal/CreateUserModal';
import ResultModal from '../../components/Modals/ResultModal/ResultModal';
import CountDown from '../../components/CountDown';
import { getRating, sendRecord } from '../../store/actions/logicActions';
import StartModal from '../../components/Modals/StartModal/StartModal';


const audio3 = new Audio(metalSound);

const Game = () => {
    const dispatch = useDispatch();
    const { shootCount, game, user, targets } = useSelector(state => state.logic);
    const [makeDied, setMakeDied] = useState(null);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openResModal, setOpenResModal] = useState(false);
    const [openStartModal, setOpenStartModal] = useState(true);
    const [falkUserName, setFakeUserName] = useState('');
    const [sequence, setSequence] = useState(targets[Math.floor(Math.random() * targets.length)]?.target_id);

    // const items = [
    //     {
    //         position: 'absolute',
    //         bottom: '33%',
    //         left: '32.3%',
    //         width: '50px',
    //         height: '75px',
    //     },
    //     {
    //         position: 'absolute',
    //         bottom: '30%',
    //         left: '9%',
    //         width: '120px',
    //         height: '200px',
    //     },
    //     {
    //         position: 'absolute',
    //         bottom: '23%',
    //         right: '39%',
    //     },
    //     {
    //         position: 'absolute',
    //         bottom: '33%',
    //         right: '26%',
    //         width: '80px',
    //         height: '140px',
    //     },
    //     {
    //         position: 'absolute',
    //         bottom: '2%',
    //         right: '9%',
    //         width: '130px',
    //         height: '200px',
    //     },
    //     {
    //         position: 'absolute',
    //         bottom: '24%',
    //         left: '20%',
    //     },
    //     {

    //         width: '50px',
    //         height: '100px',
    //         position: 'absolute',
    //         top: '12%',
    //         left: '32%',
    //     },
    //     {
    //         width: '50px',
    //         height: '90px',
    //         position: 'absolute',
    //         top: '42%',
    //         left: '36%',
    //     },
    //     {
    //         width: '70px',
    //         height: '110px',
    //         position: 'absolute',
    //         top: ' 50%',
    //         left: '42%',
    //     },
    //     {
    //         width: '60px',
    //         height: '110px',
    //         position: 'absolute',
    //         top: '21%',
    //         right: '20%',
    //     },
    //     {
    //         width: '40px',
    //         height: '80px',
    //         position: 'absolute',
    //         top: '30%',
    //         right: '35%',
    //     }
    // ];

    useEffect(() => {
        if (targets.length === 1) {
            setTimeout(() => {
                dispatch(replenishment());
            }, 300);
        }
        if (game === 'completed') {
            dispatch(sendRecord({ user: user.id, record: shootCount })).then(() => {
                dispatch(getRating()).then(() => {
                    setOpenResModal(true);
                });
            });
        };
    }, [targets, game, dispatch]);

    const playFireSound = () => {
        const audio2 = new Audio(fireSound);
        audio2.play();
    };

    const targetHitFireSound = () => {
        audio3.play();
    };

    const short = (role, count, id) => {
        if (role === "black") {
            dispatch(emptyFire(count));
        } else {
            dispatch(allyFire(count));
        };
        setMakeDied(id);
        targetHitFireSound();
        setTimeout(() => {
            dispatch(removeTarget(id));
            let filtered = targets.filter(item => item?.target_id !== id);
            setSequence(filtered[Math.floor(Math.random() * filtered.length)]?.target_id);
        }, 300);
    };

    return (
        <div className={cl.game_page} onClick={() => game === "started" && playFireSound()}>

            {openStartModal && game === 'notStarted' &&
                <StartModal
                    setOpenCreateModal={setOpenCreateModal}
                    setOpenStartModal={setOpenStartModal}
                />}

            {game === "started" &&
                <>
                    <div className={cl.glasses}>Очки: {shootCount}</div>
                    <div className={cl.user}>Вы: {user.name || falkUserName || 'user'}</div>

                    <CountDown minutes={3} />
                    
                    {targets?.map(item => {
                        if (item?.target_id === sequence) {
                            return (
                                <img
                                    key={item?.target_id}
                                    src={item.url}
                                    className={
                                        classNames(item.role === 'black' ?
                                            cl.enemy_target : cl.target,
                                            item.className, item.target_id === makeDied && item.die)
                                    }
                                    id={item.className}
                                    onClick={() => short(item.role, item.glass, item.target_id)}
                                    alt="target"
                                />
                            )
                        }
                    })}


                    {/* {targets?.map((item, index) => (
                        <img
                            style={items[index]}
                            key={item?.target_id}
                            src={item.url}
                            className={
                                classNames(item.role === 'black' ?
                                    cl.enemy_target : cl.target,
                                    item.className, item.target_id === makeDied && item.die)
                            }
                            id={item.className}
                            onClick={() => short(item.role, item.glass, item.target_id)}
                            alt="target"
                        />
                    ))} */}
                </>
            }

            {openCreateModal &&
                <CreateUserModal
                    setOpenCreateModal={setOpenCreateModal}
                    setFakeUserName={setFakeUserName}
                />}
            {openResModal &&
                <ResultModal
                    setOpenResModal={setOpenResModal}
                    setMakeDied={setMakeDied}
                    setSequence={setSequence}
                    setOpenStartModal={setOpenStartModal}
                />}

        </div>
    );
};

export default Game;