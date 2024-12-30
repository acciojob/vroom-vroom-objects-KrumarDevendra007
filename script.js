// Complete the js code
function Car(make, model) {
	make = this.make;
	model = this.model;
}

// Method added to Car prototype
Car.prototype.getMakeModel = function(){
	return `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model);
	 this.topSpeed = topSpeed;
}

// Inherit the Car prototype in SportsCar
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = funtion() {
	return `${this.topSpeed}`;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
