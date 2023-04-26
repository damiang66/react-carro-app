

export const getProductos = async()=>{
   const respuesta= await fetch('http://localhost:8080/productos');
   const productos = await respuesta.json()
    return productos;
}
export const CalcularTotal=(items)=>{
    return items.reduce((contador,item)=>contador + item.productos.precio* item.cantidad,0)
}