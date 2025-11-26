// Q4: Car constructor with shared prototype method

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log("Car:", this.brand, this.model);
};

// Creating objects
const car1 = new Car("Honda", "City");
const car2 = new Car("Hyundai", "i20");

car1.getDetails();
car2.getDetails();
