import { API_KEY, BASE_URL } from "../data/api";
// Obtiene un nombre y lo busca en la api
export const getDataByName = async (name) => {
 const url = `${BASE_URL}/${API_KEY}/search/${name}`;

 try {
  const response = await fetch(url);
  const data = await response.json();
  return { data, loading: false, error: null };
 } catch (error) {
  return { data: null, loading: false, error };
 }
};