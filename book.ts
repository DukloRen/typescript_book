export class Book {
    name: string;
    rating: number;

    constructor(name: string, rating: number) {
        this.name = name;
        if (rating <= 1 || rating >= 10) {
            throw new Error("Hibaüzenet: Nem jó az érték!");
        } else {
            this.rating = rating;
        }

    }

    toString(): string {
        return `A könyv címe: ${this.name} - Az értékelése: ${this.rating}`;
    }
}