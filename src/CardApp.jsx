

import { useItemsCard } from "./hooks/useItemsCard";
import { Navbar } from "./componentes/navbar";
import { Rutas } from "./componentes/rutas";



   
   



export const CardApp = () => {
   const{cardItems,handlerAddProductos,eliminar} = useItemsCard();
    return (<>
<Navbar/>
        <div className="container my-4">
            <h3>Compras-App</h3>
           <Rutas cardItems={cardItems} handlerAddProductos={handlerAddProductos} eliminar={eliminar}/>
            
            </div>
       
    </>)
}