class Cat {
    constructor(name, tiredness, hunger, loneliness, happiness) {
        this.name = name;
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.loneliness = loneliness;
        this.happiness = happiness;
    }
    sleep(amount = 5) {
        if (this.tiredness - amount < 0) {
            this.tiredness = 0;
        } else {
            this.tiredness -= amount;
        }
    }
    feed(amount = 2) {
        if (this.hunger - amount < 0) {
            this.hunger = 0;
        } else {
            this.hunger -= amount;
        }
    }
    cuddle(amount = 2) {
        if (this.loneliness - amount < 0) {
            this.loneliness = 0;
        } else {
            this.loneliness -= amount;
        }
    }
    pet(amount = 2) {
        if (this.happiness + amount > 10) {
            this.happiness = 10;
        } else {
            this.happiness += amount;
        }
    }
    catWellBeing() {
        let statuses = Object.keys(this);
        // console.log("this in wellBeing method", this);
        // console.log("statuses in wellBehing method", statuses);
        // statuses.forEach((status) =>
        //     console.log(`Your cat's ${status} is ${this[status]} out of 10.`)
        // );
        for (let i = 1; i < statuses.length; i++) {
            console.log(
                `${this[statuses[0]]}'s ${statuses[i]} is ${
                    this[statuses[i]]
                } out of 10.`
            );
        }
    }
}

const sirMeowington = new Cat("Sir Meowington", 5, 7, 6, 4);
// console.log(sirMeowington);
sirMeowington.catWellBeing();
sirMeowington.pet(4);
sirMeowington.catWellBeing();
