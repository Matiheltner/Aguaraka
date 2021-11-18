const ItemDetail =({producto,id}) => {
    
    let index = producto.findIndex(element => element.id === id);
    console.log(index)
    return (

<div className="col-4 m-3 border w-25" data-id={producto.id}>  
            <div className='card-header'>{producto.nombre}</div>
            <div className='card-header'>{producto.precio}</div>
            <div className='card-header'>{producto.descripcion}</div>
        <div className="col-4 m-3 border w-25" data-id={producto[index].id}>  
            <div className='card-header'>{producto[index].nombre}</div>
            <div className='card-header'>{producto[index].precio}</div>
            <div className='card-header'>{producto[index].descripcion}</div>
            <div className="card-body">
                <img src={`./resources/${producto.nombre}.jpg`} alt='Imagen del Producto' className='w-25' />
                <img src={`./resources/${producto[index].nombre}.jpg`} alt='Imagen del Producto' className='w-25' />
            </div>               
        </div>
    </div>      
    )
    }

export default ItemDetail;