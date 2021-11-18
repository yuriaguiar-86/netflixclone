
import React from 'react';
import './Header.css';

export default (black) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header-logo">
                <a href="/"><img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix" /></a>
            </div>
            <div className="header-user">
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSw2Q6J1xM3k3xAbRpWhsI2KmzdgF_X4uU3lF_kBXqI6BLWrU0kOu0f1uNkanAH2E_iE8&usqp=CAU" alt="Icone usuário" /></a>
            </div>
        </header>
    );
}