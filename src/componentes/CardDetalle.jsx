import { useEffect, useState } from "react";
import { CardItem } from "./CardItem";
import { getProductos } from "../services/ProductoService";


export const CardDetalle = ({handler})=>{
    const[producto, setProducto] = useState([]);
    useEffect(
        () => {
            setProducto(getProductos());
            
        }, [])
    //    console.log(producto);
    return (
        <>
         <div className="row">
                {producto.map(p => (
                    <div className="col-4 my-2" key={p.id}>
                       <CardItem 
                       handler={handler}
                       id={p.id}
                       nombre={p.nombre} 
                       descripcion={p.descripcion} 
                       precio={p.precio} />
                        </div>
                    
                )
              

                )}
                

              

            </div>
        </>
    );
}