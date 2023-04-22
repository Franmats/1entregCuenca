import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount';


export const ItemDetail = ({item}) => {
    return (
        < >
            <div><img src={item.imagen} alt={item.nombre} /></div>
            <h3 className='detailDes'>{item.nombre}</h3>
            <div><b>${item.precio}</b></div>
            <div className='detailDescrip'>Stock:{item.stock}</div>
            <ItemCount ValInicial={1} min={1} max={item.stock}/>
            <div className='detailDescrip'>{item.descripcion}</div>
        </>
    );
}


