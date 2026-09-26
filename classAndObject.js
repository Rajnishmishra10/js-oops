
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

     getPrice() {
          return this.#price;
     }

     setPrice(p) { 
          if (p > 0) {
               this.#price = p;
          } else {
               console.log("Invalid price");
          }
     }

     displayProduct() { // we are accessing inside the class
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

let iphone = new Product("iphone 12", 900, "Mobile", "Apple", 4.5); 

//* this.#name = "iphone 15"; we are not accessing inside the class

console.log(iphone);

iphone.setPrice(1000);

iphone.displayProduct(); 

console.log(iphone.getPrice());