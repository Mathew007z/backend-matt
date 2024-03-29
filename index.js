
// Creacion de la clase 
class ProductMananger {

    // Creacion del constructor iniciado con un array vacio de productos.
    constructor(){  
        this.productos = [];
    }
   
    // getProductos devuelve un array vacio.
    getProductos = () => {
        return this.productos;
    }

    addProduct = (title = 'producto a prueba', description='esto es un producto a prueba', price = 200, thumbnail='sin imagen', code='123', stock = 25) => {
        
        const producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

    
         
        // validacion para agregar id, y requerir todos los campos.
        if (this.productos.length === 0) {
          
            producto.id = 1;
        }else{
            producto.id = this.productos[this.productos.length - 1].id +1;
            
        }



        const repetido = this.productos.some((prod) => prod.code === producto.code);
        if (repetido) {
          console.log('Error: no se puede repetir el campo code');
        } else {
          this.productos.push(producto);
        }
           
    
        // Console log para ver el producto pusheado
       

  
        
        
    }


    // Encontrar producto por ID
    getProductId =  (idProducto) => {
        const encontrar = this.productos.find(id => id.id === idProducto)
        if(!encontrar){
            console.log('producto no encontrado')
        }else{
            console.log(encontrar)
        }
    }
}

const manejadorProductos =  new ProductMananger();
manejadorProductos.addProduct('manzana', 'roja', 200, 'imagen', 123, 5)
manejadorProductos.addProduct('pera', 'verde', 300, 'pera', 222, 2)
manejadorProductos.addProduct('pera', 'verde', 300, 'pera', 222, 2)
manejadorProductos.getProductId(1) 
manejadorProductos.getProductId(2) 
console.log(manejadorProductos.getProductos())

