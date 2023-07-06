import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../hooks/useForm";
import {
  ButtonBack,
  FieldContainer,
  Inupt,
  Label,
  SearchPageContainer,
  DropdownContent,
} from "../../ui/style/search";
import { useGetHeroPage } from "../hooks/useGetHeroPage";
import { HeroCardSearch } from "../components/HeroCardSearch";
import { optionsSearch } from "../data/optionsSearch";

export const SearchPage = () => {
  const navigate = useNavigate(); //Hook para obtener la navegación//
  const location = useLocation(); //Hook que me deja ver la dirección en donde estamos (path, query , search, etc)//

  const { q = "" } = queryString.parse(location.search); //parseo la propiedad location.search que extraigo del useLocation, para saber el query "?q=ddsadasda" de esta manera separa cada una de las piezas, como el q , asc, etc//
  //Siempre el location es un string//
  //Desestructuro para recibir siempre la q , si no viene tiene como valor default un string vacío//

  const { hero } = useGetHeroPage(q); // Le envío la búsqueda para que me arroje un array con los personajes que coincidan con la búsqueda
  const options = optionsSearch;
  const initialForm = {
    searchText: "",
  };
  const {
    searchText,
    onResetForm,
    onInputChange,
    showSuggestions,
    suggestions,
    onSelectSuggestion,
  } = useForm(initialForm, options); //Uso este custom hook para usar el value searchText y usar la fx onInputChange para que se pueda cambiar el input al escribir//

  const onSearchSubmit = (event) => {
    event.preventDefault(); //Prevenir el refrescado de la pág al enviar el form//
    // if (searchText.trim().length <= 1) return;
    //Lo que se tipea (el value= searchText) no puede ser menor a 1 y se le sacan los espacios vacíos de adelante y atrás con trim//
    navigate(`?q=${searchText}`); //Estipulo el query parámetro. Puedo ponerle .toLowerCase().trim() para ponerlo en minúsculas y sacarle los espacios//
  };

  const heroes = hero?.data?.results;

  return (
    <SearchPageContainer>
      <div className="d-flex justify-content-between align-content-center">
        <h1 className="animate__animated animate__fadeInUp">Search</h1>
        <ButtonBack onClick={onResetForm}>Clear</ButtonBack>
      </div>

      <hr />
      <div className="row">
        <div className="col-5 animate__animated animate__fadeInLeft">
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
              <Label htmlFor="searchText" className="form__label">
                Search
              </Label>
              {showSuggestions && (
                <DropdownContent>
                  {suggestions?.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => onSelectSuggestion(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </DropdownContent>
              )}
            </FieldContainer>
          </form>
          <ButtonBack onClick={onSearchSubmit}>Search</ButtonBack>
        </div>
        <div className="col-7 animate__animated animate__fadeInRight d-flex flex-wrap">
          {q === "" ? ( //Si el query es exactamente un string vacío entonces...//
            <p className="alert alert-primary">Search a hero o villain</p>
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
            heroes?.map((hero, index) => (
              <HeroCardSearch key={index} {...hero} />
            ))}
        </div>
      </div>
    </SearchPageContainer>
  );
};
