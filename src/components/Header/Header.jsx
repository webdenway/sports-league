import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="custom-background">
                <div className="header-image d-flex justify-content-center align-items-center ">
                    <div className="d-flex ">
                        <div ><h1 className ="text-light display-2 bg-dark pb-3 p-2">All About Premiere </h1></div>
                        <div><h1 className ="text-light display-2 bg-danger pb-3 p-2"> Leagues</h1></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;