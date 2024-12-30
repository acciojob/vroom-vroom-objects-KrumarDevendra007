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
	make = this.make;
	model = this.model;
	topSpeed = this.topSpeed;
}

SportsCar.prototype.getTopSpeed = funtion() {
	return `${this.topSpeed}`;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
