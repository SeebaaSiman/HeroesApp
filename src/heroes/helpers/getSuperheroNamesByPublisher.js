import { superheroesPage } from "../data/superheroesPage";

// Recibe un string publisher y busca que coincida en un objeto de nombres para retornar un array con esos nombres de superhéroes del publisher que llegó
export const getSuperheroNamesByPublisher = (publisher) => {
 let superheroNames = [];

 if (publisher === "DC Comics") {
  superheroNames = superheroesPage.dc;
 } else if (publisher === "Marvel Comics") {
  superheroNames = superheroesPage.marvel;
 } else if (publisher === "Star wars") {
  superheroNames = superheroesPage.starwars
 }

 return superheroNames;
};