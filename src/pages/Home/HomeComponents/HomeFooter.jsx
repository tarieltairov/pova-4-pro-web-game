import React from 'react';
import photo from '../../../assets/images/pova4-pc-18.jpg'
const HomeFooter = () => {
    return (
        <>
            <div style={{ background: "black" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", right: 300, position: "relative", top: 500, zIndex: 11 }} >
                    <h1 style={{ color: "white" }}  >Pova 4 PRO</h1>
                </div>
                <div>
                    <div style={{ position: "absolute", background: "black" }}>
                        <img style={{ width: "100%" }} src={photo} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeFooter;