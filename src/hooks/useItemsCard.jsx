import { useEffect, useReducer } from "react";
import { AddProductos, DeleteProductos, UpdateProductos } from "../reduces/itemsAction";
import { itemsReducer } from "../reduces/itemsReducer";

const iniciarCarro =JSON.parse(sessionStorage.getItem('card')) || []
export const useItemsCard = ()=>{
    


        const[cardItems,dispatch]= useReducer(itemsReducer,iniciarCarro)
        useEffect(()=>{
            sessionStorage.setItem('card',JSON.stringify(cardItems)); 
    
        },[cardItems])
       //const[cardItems,setCardItems]=useState(iniciarCarro);
       
       const handlerAddProductos= (productos)=>{
    
       
        const hasItems =cardItems.find((i)=>i.productos.id ===productos.id);
    if (hasItems){
        //let c = hasItems.cantidad+1
        /*
    setCardItems([
        ...cardItems.filter((i)=>i.productos.id!==productos.id),
        {
            productos:productos,
            cantidad: hasItems.cantidad +1,
            //total: productos.precio*c,
        }
    ])
    */
    // otra manera de realizarlo
    dispatch(
        {
            type:UpdateProductos,
            payload:productos
        }
    )
    
    } else{
       dispatch({
        type:AddProductos,
        payload: productos
       })
    }
    } 
    
       const eliminar=(id)=>{
    dispatch({
        type:DeleteProductos,
        payload:id
    })
       }
    

return {
cardItems,
handlerAddProductos,
eliminar,
}
}