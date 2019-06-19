import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../assets/logo1.svg';
import camera from '../assets/camera.svg';

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/"><img src={logo} width="100px" height="100px" alt="InstaRocket" /></Link>
                <Link to="/new"><img src={camera}  width="50px" height="50px" alt="Enviar publicação" /></Link>
                
            </div>
        </header>
    );
}
