
class Product {

     #name;
     #price;
     category;
     description;
     rating; 

     constructor(ProductName,ProductPrice, ProductCategory, ProductDescription, ProductRating) {
          this.#name = ProductName;
          this.#price = ProductPrice;
          this.category = ProductCategory;
          this.description = ProductDescription;
          this.rating = ProductRating;
     }

     displayProduct() {
          console.log("Product displayed", this.#name, this.#price, this.description); 
     }

     addToCart() {
          console.log("Product added to cart");
     }

     removeFromCart() {
          console.log("Product removed from cart");
     }

     buyProduct() {
          console.log("Product bought");
     } 

}

let iphone = new Product("iphone 12", 125000, "Mobile", "Apple", 4.5); 
console.log(iphone);
iphone.displayProduct();