import { useEffect, useState } from "react";
import { getSuperheroNamesByPublisher, getSuperheroesData } from "../helpers";


export const useGetPublisher = (publisher) => {

 const [superheroesData, setSuperheroesData] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
   const superheroNamesArray = getSuperheroNamesByPublisher(publisher);
   const data = await getSuperheroesData(superheroNamesArray);
   setSuperheroesData(data);
  };

  fetchData();
 }, [publisher]);
 return { superheroesData }
}