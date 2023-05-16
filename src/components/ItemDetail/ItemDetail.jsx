import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';

export const ItemDetail = ({item}) => {
    
    const {añadirItem} = useCartContext()
    const onAdd = (contador) => {
        añadirItem(item, contador)
    }
    return (
        < >
            <div>
                <img src={item.imagen} alt={item.nombre} />
            </div>
            <div className='detail'>
                <h3 className='detailDes'>{item.nombre}</h3>
                <div className='detailDescrip'>{item.descripcion}</div>
                <div><b>${item.precio}</b></div>
                <div className='detailDescrip'>Stock:{item.stock}</div>
                <div className='contador'><ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd} /></div>
            </div>
            
           
            

        </>
    );
}


