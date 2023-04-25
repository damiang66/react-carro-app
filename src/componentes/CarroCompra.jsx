


export const CarroCompra = ({items}) => {
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
                              <button className="btn - btn-danger btn-sm">Eliminar</button>
                          </td>
                      </tr>
                            
                            ))}
                      

                    </tbody>
                    <tfoot>
                        <tr>
                        <td colSpan={3} className="text-end fw-bold">Total</td>
                        <td colSpan={2} className="text-start fw-bold">1000</td>
                        </tr>
                    </tfoot>
                </table>
    </>
  )
}
