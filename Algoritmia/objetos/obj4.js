const car = [
    {
        brand: 'Ford',
        speed: 0,

        accelerate: function (amount) {
            this.speed += amount;
        }
    },
    //b
    brake: function (amount) {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0
        }
    }

]

//c
car.status = function () {
    return `${this.brand} running at ${this.speed} km/h`;
};

console.log


