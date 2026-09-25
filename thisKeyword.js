
let obj = {
     x: 10,
     y: 50,
     fn: function () {
          console.log(this.x, this.y);
     }
} 
obj.fn();

let obj1 = {
     x: 100,
     y: 60,
     z: {
          x: 99,
          fun: function () {
               console.log(this.x, this.y);
          }
     }
} 
obj1.z.fun(); //output: 99 undefined

let obj2 = {
     x: 20,
     y: 80,
     fn: function() {
          const arrow = () => {
               console.log(this.x, this.y);
          }
          arrow();
     } 
} 
obj2.fn(); // 10 50