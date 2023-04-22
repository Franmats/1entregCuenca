import { Link } from "react-router-dom";


export const Categorias = () => {
    return (
        <>
            <ul className="lista">
                <li className="lista__item">
                    <Link className="itemTexto" to={"/"}><span className="material-symbols-outlined">
                        sell
                    </span><h4>OFERTAS</h4></Link>
                </li>
                <li className="lista__item">
                    <Link className="itemTexto" to={"/category/notebook"}><span className="material-symbols-outlined">
                        computer
                    </span><h4>NOTEBOOKS</h4></Link>
                </li>
                <li className="lista__item">
                    <Link className="itemTexto" to={"/category/celular"}><span className="material-symbols-outlined">
                        smartphone
                    </span><h4>CELULARES</h4></Link>
                </li>
                <li className="lista__item">
                    <Link className="itemTexto" to={"/category/pcescritorio"}><span className="material-symbols-outlined">
                        desktop_windows
                    </span><h4>PC ESCRITORIO</h4></Link>
                </li>
            </ul>
        </>
    );
}


