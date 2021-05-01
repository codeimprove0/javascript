 
 class  Car{

    constructor(brand,price){
        this.brand = brand;
        this.price = price;

    }
    getModel(model){
        return `Car ${this.brand} model is ${model}`;
    }
    getInfo(){
        return `${this.brand} price is ${this.price}`;
    }

    news(){
        return 'Next month car BMW';
    }
     static address(){
        return "India";
    }

 }

 class Vehicle extends Car {

    constructor(brand,price,color){
        super(brand,price);
        this.color = color; 
    }

    getBikeColor(){
        let infoDetail = this.getInfo(); // super.getInfo();
        return this.color+' bike fn '+this.brand +infoDetail;
    }

    getVehicleType(){
        return 2;
    }

    news(){
        return 'Next month car NANO';
    }
    static engineNo(){
        return 'ABCD121212'+this.color;
    }
 
 }

 console.log(Vehicle.engineNo())

 let obj = new Vehicle('Maruti',3,'white');
let info = obj.getInfo();
let vehicleType = obj.getVehicleType();
console.log(info,vehicleType)

console.log(obj.news())


/*  let carObj = new Car('Maruti','3');

let carPrice = carObj.getInfo();
let model = carObj.getModel(2020)
console.log(carPrice,model) */

/*  let model = carObj.getModel(2020)
 let model2 = carObj.getModel(2010)
 console.log(model,model2) */