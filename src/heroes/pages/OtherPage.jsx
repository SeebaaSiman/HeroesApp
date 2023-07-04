import { API_BASE } from "../hooks/api";
import { useFetch } from "../hooks/useFetch";
export const OtherPage = () => {
  const BASE_URL = "https://www.superheroapi.com/api.php";
  const api = "4204884039587685";
  // const apiKey = "4204884039587685";
  const heroName = "yoda";

  // const url = `${BASE_URL}/${api}/234`;
  const url = `${BASE_URL}/${api}/search/${heroName}`;

  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error lpm: {error.message}</div>;
  }
  console.log(data);
  console.log(url);
  return (
    <div>
      <h2>{data?.name}</h2>
      <img src={data?.image.url} alt={data?.name} />

      <h3>Powerstats:</h3>
      <ul>
        <li>Intelligence: {data?.powerstats.intelligence}</li>
        <li>Strength: {data?.powerstats.strength}</li>
        <li>Speed: {data?.powerstats.speed}</li>
        <li>Durability: {data?.powerstats.durability}</li>
        <li>Power: {data?.powerstats.power}</li>
        <li>Combat: {data?.powerstats.combat}</li>
      </ul>

      <h3>Biography:</h3>
      <ul>
        <li>Full Name: {data?.biography["full-name"]}</li>
        <li>Aliases: {data?.biography.aliases.join(", ")}</li>
        <li>Alignment: {data?.biography.alignment}</li>
        <li>First Appearance: {data?.biography["first-appearance"]}</li>
        <li>Publisher: {data?.biography.publisher}</li>
      </ul>

      <h3>Appearance:</h3>
      <ul>
        <li>Gender: {data?.appearance.gender}</li>
        <li>
          Height: {data?.appearance.height[0]} - {data?.appearance.height[1]}
        </li>
        <li>
          Weight: {data?.appearance.weight[0]} - {data?.appearance.weight[1]}
        </li>
        <li>Eye Color: {data?.appearance["eye-color"]}</li>
        <li>Hair Color: {data?.appearance["hair-color"]}</li>
      </ul>

      <h3>Work:</h3>
      <ul>
        <li>Occupation: {data?.work.occupation}</li>
        <li>Base: {data?.work.base}</li>
      </ul>

      <h3>Connections:</h3>
      <ul>
        <li>Group Affiliation: {data?.connections["group-affiliation"]}</li>
        <li>Relatives: {data?.connections.relatives}</li>
      </ul>
    </div>
  );
};
