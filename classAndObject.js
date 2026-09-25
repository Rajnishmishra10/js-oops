
class Product {

     // name;
     // price;
     // category;
     // description;
     // rating;

     constructor(ProductName,ProductPrice, ProductCategory, ProductDescription, ProductRating) {
          this.name = ProductName;
          this.price = ProductPrice;
          this.category = ProductCategory;
          this.description = ProductDescription;
          this.rating = ProductRating;
     }

     addToCart() {
          console.log("Product added to cart");
     }

     removeFromCart() {
          console.log("Product removed from cart");
     }

     displayProduct() {
          console.log("Product displayed");
     }

     buyProduct() {
          console.log("Product bought");
     } 

}

let iphone = new Product("iphone 12", 125000, "Mobile", "Apple iphone 12", 4.5); 
console.log(iphone)