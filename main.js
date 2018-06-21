class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    add(child) {
        this.children.push(child);
    }

    remove(child) {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i] === child) {
                return this.children.splice(i, 1);
            }
        }
    }
}
