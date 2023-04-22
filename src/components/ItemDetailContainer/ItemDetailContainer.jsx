//Visualizar un producto de la BDD con sus detalles
import './ItemDetailContainer.css'
import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
export const ItemDetailContainer = () => {
    
    const [item,setItem] = useState([])
    const {name} = useParams()
    useEffect(()=> {
        fetch('../json/products.json')//por estar en una carpeta por dejebajo
            .then(response=> response.json())
            .then(productos => {
                const produ = productos.find(prod=>prod.nombretag === (name))
                setItem(produ)
            })
    },[])
    return (
        <div className='cardDetail'>
            <ItemDetail item={item} />   
        </div>
    );
}



