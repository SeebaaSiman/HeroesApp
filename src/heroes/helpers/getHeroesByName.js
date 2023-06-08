import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
    name = name.toLocaleLowerCase().trim(); //El parámetro name que le pase a la fx lo pasa a minúscula y le saca los espacios vacíos//
    if (name.length === 0) return []; //Si es 0, devuelve un array vacío//
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name)); //Hago un filter a heroes.js data ya que es un array. En cada arreglo hero, busco que superhero (que es el nombre de los superhéroes) lo pase a minúscula y si coincide (o está incluído) el name lo retorna. Si no coincide retorna un //

}
