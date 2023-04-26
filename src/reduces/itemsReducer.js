import { AddProductos, DeleteProductos, UpdateProductos } from "./itemsAction";

export const itemsReducer = (state = [], action) => {

    switch (action.type) {
        case AddProductos:

            return [...state,
                {
                productos:action.payload,
                cantidad:1,
               // total :productos.precio *1,
            }
        ];
        case UpdateProductos:

            return state.map((i)=>{
                if(  i.productos.id===action.payload.id){
                return {
                    ...i,
                    cantidad : i.cantidad+1,
                }
          
                }    
                return i;
              } 
          );
        case DeleteProductos:

            return [
                ...state.filter((i)=>i.productos.id!==action.payload),
            ] ;

        default:
            return state;
    }

}