export const Item = ({producto}) => {
    return (
<div className="card w-25 mt-5" key={producto.id}>
                        <div className="card-header">
                            {`${producto.name}`}
                        </div>
                        <div className="card-body">
                            <img src={`./Imagen/${producto.foto}.png`} alt="Artesania de gres" />
                            {producto.price}
                        </div>
                        <div className="card-footer">

                            <button className="btn btn-outline-primary btn-block">

                            </button>
                        </div>
</div>)
}