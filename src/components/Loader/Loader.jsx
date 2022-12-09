import React from 'react';
import cl from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={cl.spinner}>
            <div className={cl.circle}></div>
            <div className={cl.circle}></div>
            <div className={cl.circle}></div>
        </div>
    );
};

export default Loader;