class Car {
    constructor(id, manufacturer, model, color, releaseYear, price, horsepower) {
        this.id = id;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.releaseYear = releaseYear;
        this.price = price;
        this.horsepower = horsepower;
    }

    getDescription() {
        return `ამ მანქანას აქვს შემდეგი მახასიათებლები: \nმარკა - ${this.manufacturer} \nფერი - ${this.color} \nმოდელი - ${this.model} \nგამოშვების წელი - ${this.releaseYear} \nცხენის ძალა - ${this.horsepower} \nფასი - ${this.price}`;
    }
}

export default Car;