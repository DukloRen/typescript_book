import { Book } from "./book";

document.addEventListener("DOMContentLoaded", init);

function init(): void{
  document.getElementById("submit")?.addEventListener("click", addNewBook);
}

const list: Book[] = [];

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function addNewBook(){
  const name: string = (<HTMLInputElement>document.getElementById("konyv")).value;
  const rating: number = parseInt((<HTMLInputElement>document.getElementById("ertekeles")).value);
  const book: Book = new Book(name, rating);
  list.push(book);
  console.log(book);
}

for (let i = 0; i < 30; i++) {
  let book: Book = new Book("Book#" + i, randomInt(1, 10));
  list.push(book);
}

for (let i = 0; i < list.length; i++) {
  if (list[i].rating > 7) {
    console.log(list[i].toString());
  }
}

let bestof: Book = new Book("", 1);
let legjobb: number = 0;

for (let i = 0; i < list.length; i++) {
  if (list[i].rating > legjobb) {
    legjobb = list[i].rating;
    bestof = list[i];
  }
}
console.log("Legjobbra értékelt könyv: " + bestof.toString());