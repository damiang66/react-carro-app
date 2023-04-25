

export const CardItem = ({nombre,descripcion,precio}) => {
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
                    <button className="btn btn-dark">Agregar al carro</button>

                </div>
            </div>
        </>
    )
}


