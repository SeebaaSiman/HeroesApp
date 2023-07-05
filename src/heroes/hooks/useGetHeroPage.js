import { useEffect, useState } from "react";
import { getDataByName } from "../helpers";

export const useGetHeroPage = (id) => {
 const [hero, setHero] = useState([])

 useEffect(() => {
  const fetchData = async () => {
   const data = await getDataByName(id);
   setHero(data);
  };

  fetchData();
 }, [id]);


 return { hero }
}
