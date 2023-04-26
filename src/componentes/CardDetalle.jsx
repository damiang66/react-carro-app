import { useEffect, useState } from "react";
import { CardItem } from "./CardItem";
import { getProductos } from "../services/ProductoService";


export const CardDetalle = ({handler})=>{
    const[producto, setProducto] = useState([]);
    const[cargardo,setCargando]=useState(true)
    const findAll = async  ()=> {
        const prods = await getProductos();
        setProducto(prods);
        setCargando(false)
    }
    useEffect(
        () => {
           findAll();
            
        }, [])
    //    console.log(producto);
    return (
        <>
        {
            cargardo && <div className="alert alert-info"> cargando ...</div>
        }
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