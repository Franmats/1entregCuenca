// Consulta a la BDD o json y se los manda a el componente ItemList para q lo transforme
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList.jsx';
import React, { useEffect, useState } from 'react';;


export const ItemListContainer = () => {
    const[productos, setProductos] = useState([])
    const {category} =useParams()

    useEffect(()=>{
        if(category) {
            fetch('../json/products.json')
            .then(response=>response.json())
            .then(productos => {
                const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === (category));
                setProductos(productosFiltrados)
            })    
        } else {
            fetch('./json/products.json')
            .then(response=>response.json())
            .then(productos => {
                const productosFiltrados = productos.filter(prod => prod.stock > 0)
                setProductos(productosFiltrados)
            })
        }


    },[category])
    return (
        <div className='.mainOffers'>
            {<ItemList productos={productos}  />}
        </div>
    );
}


