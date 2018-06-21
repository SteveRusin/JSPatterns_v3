class Banana {
    constructor(color) {
        this.color = color;
    }
}
class Apple {
    constructor(color) {
        this.color = color;
    }
}

class Orange {
    constructor(size) {
        this.size = size;
    }
}

class FruitFactory {
    createFruit(fuitName) {
        switch (fuitName) {
            case 'banana':
                return new Banana('yellow');
            case 'apple':
                return new Apple('red');
            case 'orange':
                return new Orange('orange');
            default:
                return `We don't have that fruit in the factory`;
        }
    }
}
