import { useEffect, useState } from "react";
import Swal from "sweetalert2"
import { CalcularTotal } from "../services/ProductoService";
import { useNavigate } from "react-router-dom";



export const CarroCompra = ({eliminar,items}) => {
    const navegar = useNavigate();
    const ir = ()=>{
        navegar('/catalogo');
    }
    const[total,setTotal]= useState(0);
    useEffect(()=>{
        sessionStorage.setItem('card',JSON.stringify(items)); 
setTotal(
   
    CalcularTotal(items)
 )
    },[items])
    const onDeleteProducto = (id)=>{
     //   console.log('elimiando');
     eliminar(id);
     Swal.fire('Eliminado', `producto con id ${id} eliminado del carro de compra`, 'warning');
    }
  return (
    <>
     <h3>Carro de Compras</h3>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>cantidad</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </tr>

                    </thead>
                    <tbody>
                    {items.map(i=>(
                          <tr key={i.productos.id}>
                      
                          <td>{i.productos.nombre}</td>
                          <td>{i.productos.precio}</td>
                          <td>{i.cantidad}</td>
                          <td>{i.cantidad *i.productos.precio}</td>
                          <td>
                          
                              <button onClick={()=>onDeleteProducto(i.productos.id)} className="btn - btn-danger btn-sm">Eliminar</button>
                          </td>
                      </tr>
                            
                    ))}
                      

                    </tbody>
                    <tfoot>
                        <tr>
                        <td colSpan={3} className="text-end fw-bold">Total</td>
                        <td colSpan={2} className="text-start fw-bold">{total}</td>
                        </tr>
                    </tfoot>
                </table>
                <button onClick={ir} className="btn btn-success">Seguir Comprando</button>
    </>
  )
}
