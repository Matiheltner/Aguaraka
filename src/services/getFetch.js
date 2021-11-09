class Productos{
    constructor(nombre,precio,stock,id){
        this.name = nombre;
        this.price = precio;
        this.stock = stock;
        this.id = id;
    }
}

// Declaro el array de productos
const arrayProductos = [];

// Declaro 5 productos
arrayProductos.push(new Productos("Maceta", 44.99, 20));
arrayProductos.push(new Productos("Maceta", 98.99, 10));
arrayProductos.push(new Productos("Maceta", 55.50, 40));
arrayProductos.push(new Productos("Maceta", 104.99, 15));
arrayProductos.push(new Productos("Maceta", 37.50, 25));


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
export default getFetch