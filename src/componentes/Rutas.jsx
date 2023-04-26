import { Navigate, Route, Routes } from "react-router-dom"
import { CardDetalle } from "./CardDetalle"
import { CarroCompra } from "./CarroCompra"

export const Rutas=({handlerAddProductos,cardItems,eliminar})=>{
    return (<>
     <Routes>
            <Route path="/" element={ <Navigate to ={'/catalogo'}/>}/>
                <Route path="catalogo" element={  <CardDetalle handler={handlerAddProductos}/>}/>
                <Route path="card" element={( 
                    <div className="my-4 w-50">
                    {cardItems?.length<=0 ? 
                    <div className="alert alert-warning">
                        no Exite producto en el carrito de compra

                    </div>
                    
                    : ( <CarroCompra eliminar={eliminar} items={cardItems} />)}
               
                </div>
                )}/>
               
            </Routes>
         
    </>)

}