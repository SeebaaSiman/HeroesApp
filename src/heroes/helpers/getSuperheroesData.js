import { getDataByName } from "./getDataByName";

//Recibe un array de nombres de superhéroes que se usarán para buscar cada uno en la api
export const getSuperheroesData = async (superheroNames) => {
 const superheroesData = [];

 for (const name of superheroNames) {
  const { data, loading, error } = await getDataByName(name);

  if (!loading && !error && data) {
   superheroesData.push(data);
  }
 }

 return superheroesData;
};