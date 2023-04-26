import { productos } from "../data/productos"

export const getProductos = ()=>{
    return productos;
}
export const CalcularTotal=(items)=>{
    return items.reduce((contador,item)=>contador + item.productos.precio* item.cantidad,0)
}