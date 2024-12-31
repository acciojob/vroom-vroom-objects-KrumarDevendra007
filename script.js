// Complete the js code
// Constructor function for Car
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Method added to Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// Constructor function for SportsCar
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor to initialize make and model
    // Car.call(make, model, this);
	this.make = make;
    this.model = model;
    this.topSpeed = topSpeed;
}

// Inherit the Car prototype in SportsCar
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Method added to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return ` ${this.topSpeed}`;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
