
import { useState } from "react";
import { CardDetalle } from "./componentes/CardDetalle";
import { CarroCompra } from "./componentes/CarroCompra";
const iniciarCarro =[
    /*
    {
      productos:{

      } ,
      cantidad:0 ,
      total:0
    }
    */
]


export const CardApp = () => {
   const[cardItems,setCardItems]=useState(iniciarCarro);

    return (<>

        <div className="container">
            <h3>Compras-App</h3>
           <CardDetalle />
            <div className="my-4 w-50">
            <CarroCompra items={cardItems} />
            </div>
            </div>
       
    </>)
}