

class ProductMananger {


    constructor(){
        this.productos = [];
    }

    getProductos = () => {
        return this.productos;
 
    }

    addProduct = (title= 'producto a prueba', description='esto es un producto a prueba', price = 200, thumbnail, code, stock = 25) => {
        const producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: []
        }

        if (this.productos.length === 0) {
            producto.id = 1;
        }else{
            producto.id = this.productos[this.productos.length - 1].id +1;
        }

        this.productos.push(producto);
        
    }

    AgregarUsuario =  (idEvento, idUsuario) => {
        const productoIndex = this.productos.findIndex(e => e.id === idEvento);

        if(productoIndex === -1){
            console.log('producto no encontrado')
            return
        }
        
        const productoDuplicado = this.productos[productoIndex].id.includes(idUsuario)

        if(productoDuplicado){
            console.log('producto ya encontrado')
            return
        }

        this.productos[productoIndex].id.push(idUsuario);
        
    }


}


const manejadorProductos =  new ProductMananger();
manejadorProductos.addProduct('manzana', 'roja', 200, 'imagen', 123, 5)
manejadorProductos.AgregarUsuario(1,2) 
console.log(manejadorProductos.getProductos())
