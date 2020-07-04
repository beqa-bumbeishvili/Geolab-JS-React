class Car {
    id: string;
    manufacturer: string;
    model: string;
    color: string;
    releaseYear: number;
    price: string;
    horsepower: number;
    imageType: string;

    getDescription() {
        return `ამ მანქანას აქვს შემდეგი მახასიათებლები: \nმარკა - ${this.manufacturer} \nფერი - ${this.color} \nმოდელი - ${this.model} \nგამოშვების წელი - ${this.releaseYear} \nცხენის ძალა - ${this.horsepower} \nფასი - ${this.price}`;
    }

    constructor(id: string, manufacturer: string, model: string, color: string, releaseYear: number, price: string, horsepower: number, imageType: string) {
        this.id = id;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.releaseYear = releaseYear;
        this.price = price;
        this.horsepower = horsepower;
        this.imageType = imageType;
    }
}

export default Car;