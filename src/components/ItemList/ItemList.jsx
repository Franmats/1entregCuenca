// Recibir una array de productos y transformarlo
import { Item } from '../Item/Item.jsx';
export const ItemList = ({productos}) => {
    
    return (
        <>
            {productos.map(producto => <Item key={producto.id} item={producto}/>)}
        </>
    );
}

