 

function Car(brand,model,color){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.name = function(){
        return this.brand +' '+this.model;
    }
}

var carDetail = new Car('Maruti','Swift','White');
carDetail.fuelType = 'Petrol';

var car2Detail = new Car('Honda','i20','Black');

car2Detail.fuelType = 'CNG';

car2Detail.colorNew = function(){
    return 'Orange Color';
}

console.log(carDetail.name())

console.log(car2Detail.fuelType)