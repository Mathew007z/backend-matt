
// Creacion de la clase 
class ProductMananger {

    // Creacion del constructor iniciado con un array vacio de productos.
    constructor(){  
        this.productos = [];
        // Inicia con array vacio
        console.log(this.productos)
    }
   
    // getProductos devuelve un array vacio.
    getProductos = () => {
        return this.productos;
        
    }

    addProduct = (title= 'producto a prueba', description='esto es un producto a prueba', price = 200, thumbnail='sin imagen', code='123', stock = 25) => {
        const producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        const values = Object.values(producto)
        if(values === code.value){
         console.log('error duplicado')
         return
        }
         
        // validacion para agregar id, y requerir todos los campos.
        if (this.productos.length === 0) {
          
            producto.id = 1;
        }else{
            producto.id = this.productos[this.productos.length - 1].id +1;
            
        }


        if(this.productos.includes('code')){
            console.log('error')
        }
            this.productos.push(producto);  
        
      


        // Console log para ver el producto pusheado
        console.log(producto)

  
    
        
    }




    // Encontrar producto por ID
    encontrarProducto =  (idProducto) => {
       const encontrar = this.productos.find(id => id.id === idProducto.id)

        if(!encontrar){
            console.log('producto no encontrado')
        }else{
            console.log(encontrar)
        }
    }


 
}


const manejadorProductos =  new ProductMananger();



manejadorProductos.addProduct('manzana', 'roja', 200, 'imagen', 123, 5)
manejadorProductos.encontrarProducto(1) 
manejadorProductos.addProduct('pera', 'verde', 300, 'pera', 222, 2)
// manejadorProductos.encontrarProducto(1,2) 
console.log(manejadorProductos.getProductos())
