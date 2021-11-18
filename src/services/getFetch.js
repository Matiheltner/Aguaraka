class Productos{
    constructor(nombre,precio,descripcion,id){
        this.name = nombre;
        this.price = precio;
        this.descripcion = descripcion;
        this.id = id;
    }
}

// Declaro el array de productos
const arrayProductos = [];

// Declaro 5 productos
arrayProductos.push(new Productos("Maceta", 44.99, "Maceta de gres elaborada por artesanos con barro del litoral de nuestro pais(PIEZA UNICA)",));
arrayProductos.push(new Productos("Jarra de agua", 98.99, "Jarra de agua elaborada por artesanos con barro extraido de Arroyo Leyes,Ciudad proveniente de Santa Fe"));
arrayProductos.push(new Productos("Taza de café", 55.50, "Taza dee café creada bajo estandares reales,para que pases un momento no solo de placer gustativo sino que puedas conectarte con el barro de nuestras raices"));
arrayProductos.push(new Productos("Platos", 104.99, "Platos elaborado con materiales organicos recolectados a mano por el artesano creador"));
arrayProductos.push(new Productos("Compotera de gres", 37.50, "Compotera elaborada con medidas reales para momentos reales"));

for(let element in arrayProductos){
    arrayProductos[element].id = element;
}

const getFetch = new Promise ((resolve,reject) => {

    const condition = true;
    if(condition){
        setTimeout(() =>{
            resolve(arrayProductos)
        }, 2000)
    }
    else {
        setTimeout(()=> {
            reject("404 Error Not Found")
        },2000)
    }
})
export default getFetch;