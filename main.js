class Dog {
    constructor(name){
        this.name = name;
    }

    wheelTheTail() {
        console.log('Wheeling the tail');
    }
}

class TeachBarkDecorator {
    constructor(dog) {
        return Object.create(dog);
    }

    bark() {
        console.log(`The dog ${this.name} is barking`);
    }
}
