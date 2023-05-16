
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget.jsx';
import { Categorias } from './Categorias/Categorias';

export const NavBar = () => {
    return ( 
        <nav>
            <div className="header_top">
                <div className="header_logo">
                    <h1><span>ELECTROSHOP</span></h1>
                </div>
                <CartWidget counter={1} />
            </div>

            <Categorias />
            <div className="header_logo_desk">
                <h1><span>ELECTROSHOP</span></h1>
            </div>
            
        </nav>

    );
}

