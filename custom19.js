

 // All JavaScript objects inherit properties and methods from a prototype:

 function Car(brand,model,color){

    this.brand = brand;
    this.model = model;
    this.color = color;
    this.name = function(){
        return this.brand+' '+this.model;
    }
 }

 
 Car.prototype.modelNo = '2010';

 Car.prototype.price = function(priceNo){
     return 'Car Price is '+priceNo.toLocaleString();
 }

 let carObj = new Car('Honda','i20','Black');


/*  console.log(carObj);
console.log('model is '+carObj.modelNo) */

console.log(carObj.price(750000))

 let carName = carObj.name();
 console.log(carName);

