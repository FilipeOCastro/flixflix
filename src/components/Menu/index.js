import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css'
import Button from '../Button';

function Menu() {

    return (
        <nav className="Menu">

            <a href="/">
                <img class="Logo" src={Logo}  alt="FlixFlix Logo"></img>
            </a>

            <Button as ="a" className="ButtonLink" href="/">
              New video
            </Button>

        </nav>

        );    
}

export default Menu;