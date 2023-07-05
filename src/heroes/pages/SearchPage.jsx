import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../hooks/useForm";
import {
  ButtonBack,
  FieldContainer,
  Inupt,
  Label,
  SearchPageContainer,
} from "../../ui/style/search";
import { HeroCard } from "../components/HeroCard";
import { useGetHeroPage } from "../hooks/useGetHeroPage";

export const SearchPage = () => {
  const navigate = useNavigate(); //Hook para obtener la navegación//

  const location = useLocation(); //Hook que me deja ver la dirección en donde estamos (path, query , search, etc)//

  const { q = "" } = queryString.parse(location.search); //parseo la propiedad location.search que extraigo del useLocation, para saber el query "?q=ddsadasda" de esta manera separa cada una de las piezas, como el q , asc, etc//
  //Siempre el location es un string//
  //Desestructuro para recibir siempre la q , si no viene tiene como valor default un string vacío//

  const { hero } = useGetHeroPage(q); // Le envío la búsqueda para que me arroje un array con los personajes que coincidan con la búsqueda

  const { searchText, onInputChange } = useForm({
    searchText: q,
  }); //Uso este custom hook para usar el value searchText y usar la fx onInputChange para que se pueda cambiar el input al escribir//

  const onSearchSubmit = (event) => {
    event.preventDefault(); //Prevenir el refrescado de la pág al enviar el form//
    // if (searchText.trim().length <= 1) return;
    //Lo que se tipea (el value= searchText) no puede ser menor a 1 y se le sacan los espacios vacíos de adelante y atrás con trim//
    navigate(`?q=${searchText}`); //Estipulo el query parámetro. Puedo ponerle .toLowerCase().trim() para ponerlo en minúsculas y sacarle los espacios//
  };

  const heroes = hero?.data?.results;
  console.log(hero, "hero obtenido de useGetHeroPage");
  console.log(heroes, "depurado");
  return (
    <SearchPageContainer>
      <h1 className="animate__animated animate__fadeInUp">Search</h1>
      <hr />
      <div className="row">
        <div className="col-4 animate__animated animate__fadeInLeft">
          <form onSubmit={onSearchSubmit}>
            <FieldContainer className="form__group field">
              <Inupt
                type="text"
                className="form__field"
                placeholder="Search a hero"
                required=""
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />
              <Label for="searchText" className="form__label">
                Search
              </Label>
            </FieldContainer>

            <ButtonBack>Search</ButtonBack>
          </form>
        </div>
        <div className="col-8 animate__animated animate__fadeInRight">
          {q === "" ? ( //Si el query es exactamente un string vacío entonces...//
            <div className="alert alert-primary">Search a hero o villain</div>
          ) : (
            //Si heroes es igual a 0 significa que no encontró nada y será true no hero with ese q//
            heroes &&
            heroes?.length === 0 && (
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            )
          )}
          {heroes &&
            heroes?.map((hero) => <HeroCard key={hero.id} results={heroes} />)}
        </div>
      </div>
    </SearchPageContainer>
  );
};
