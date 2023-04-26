import Swal from "sweetalert2"

import { useNavigate } from "react-router-dom";


export const CardItem = ({handler,id,nombre,descripcion,precio}) => {
    const navigate = useNavigate();
    const carrito = (productos)=>{
        handler(productos);
        Swal.fire('Mensaje', 'El producto se agrego con exito', 'success')
        navigate('/card')
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {nombre}
                    </h5>
                    <p className="card-text">
                        {descripcion}
                    </p>
                    <p className="card-text">
                        {precio}
                    </p>
                    <button onClick={()=>carrito({id,nombre,descripcion,precio})} className="btn btn-dark">Agregar al carro</button>

                </div>
            </div>
        </>
    )
}


