import React from 'react';
import './Navbar.css'
import { CartWidget } from '../CartWidget/CartWidget.jsx';
import { Categorias } from './Categorias/Categorias';
export const Navbar = () => {
    return ( 
        <nav>
            <div className="header_top">
                <div className="header_menu"> 
                    <span className="material-symbols-outlined">menu</span>
                </div>
                <div className="header_logo">
                    <h1><span>ELECTROSHOP</span></h1>
                </div>
                <CartWidget counter={1} />
            </div>
            
            <Categorias />
            
        </nav>

    );
}

