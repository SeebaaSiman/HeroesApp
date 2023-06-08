import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate(); //Hook para obtener la navegación//

  const location = useLocation(); //Hook que me deja ver la dirección en donde estamos (path, query , search, etc)//

  const { q = "" } = queryString.parse(location.search); //parseo la propiedad location.search que extraigo del useLocation, para saber el query "?q=ddsadasda" de esta manera separa cada una de las piezas, como el q , asc, etc//
  //Siempre el location es un string//
  //Desestructuro para recibir siempre la q , si no viene tiene como valor default un string vacío//

  const heroes = getHeroesByName(q); //creo heroes con la fx que va a usar como parámetro name al q //

  const { searchText, onInputChange } = useForm({
    searchText: q,
  }); //Uso este custom hook para usar el value searchText y usar la fx onInputChange para que se pueda cambiar el input al escribir//
  const onSearchSubmit = (event) => {
    event.preventDefault(); //Prevenir el refrescado de la pág al enviar el form//
    if (searchText.trim().length <= 1) return; //Lo que se tipea (el value= searchText) no puede ser menor a 1 y se le sacan los espacios vacíos de adelante y atrás con trim//
    navigate(`?q=${searchText}`); //Estipulo el query parámetro. Puedo ponerle .toLowerCase().trim() para ponerlo en minúsculas y sacarle los espacios//
  };
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" ? ( //Si el query es exactamente un string vacío entonces...//
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            //Si heroes es igual a 0 significa que no encontró nada y será true no hero with ese q//
            heroes.length === 0 && (
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            )
          )}
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
