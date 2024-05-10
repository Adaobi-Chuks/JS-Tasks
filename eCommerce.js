class Product{
    constructor(name, price, description){
        this.name = name;
        this.price = price;
        this.description = description
    }
}

class shoppingCarts{
    products;
    constructor(){
        this.products = [];
    }

    addProduct(name, price, description){
        const product1 = new Product(name, price, description)
        this.products.push(product1);
    }   

    displayTotalCost(){
        let cost = 0
        this.products.forEach((product) => {
            cost += product.price;
        });
        return cost;
    }
    
}
const addedProduct = new shoppingCarts();

const cart = new shoppingCarts();

cart.addProduct(addedProduct[index].name, )
addedProduct.addProduct("book", "100", "very interesting")
console.log(addedProduct)
addProduct.clear();
