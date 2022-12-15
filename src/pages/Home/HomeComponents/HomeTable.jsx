import React from 'react';
import cl from '../Home.module.scss';
import Table from '../../../assets/images/main/pova4-pc-3-1.jpg';

const HomeTable = () => {
    return (
        <div>
            <img className={cl.img__table} src={Table} alt=""/>
        </div>
    );
};

export default HomeTable;