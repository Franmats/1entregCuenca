import { useCount } from "../../hooks/useCount.js";

export const ItemCount = ({ValInicial, min, max}) => {
    
    const {count, sumar, restar, reset} = useCount(ValInicial,min,max)
    
    return (
        <>
            <button onClick={restar}>-</button>
            {count}
            <button onClick={sumar}>+</button>
            <button onClick={reset}>Reset</button>
            <button className="btn">Agregar al Carrito</button>
        </>
    );
}


