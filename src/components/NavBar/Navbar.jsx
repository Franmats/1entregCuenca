import React from 'react';
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget.jsx';
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
            
            <ul className="lista">
                <li className="lista__item">
                    <a className="itemTexto" href="true" target="_self"><span className="material-symbols-outlined">
                        sell
                    </span><h4>OFERTAS</h4></a>
                </li>
                <li className="lista__item">
                    <a className="itemTexto" href="true" target="_self"><span className="material-symbols-outlined">
                        computer
                    </span><h4>NOTEBOOKS</h4></a>
                </li>
                <li className="lista__item">
                    <a className="itemTexto" href="true" target="_self"><span className="material-symbols-outlined">
                        smartphone
                    </span><h4>CELULARES</h4></a>
                </li>
                <li className="lista__item">
                    <a className="itemTexto" href="true" target="_self"><span className="material-symbols-outlined">
                        desktop_windows
                    </span><h4>PC ESCRITORIO</h4></a>
                </li>
            </ul>
            
        </nav>

    );
}

