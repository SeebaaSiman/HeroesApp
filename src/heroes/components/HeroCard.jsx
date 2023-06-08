import { Link } from "react-router-dom";
//Creo un mini componente aquí para comprobar que no se repitan los actores del personaje con el villano, en vez de hacerlo en un componente aparte lo pongo acá//
const CharactersByHero = ({ alter_ego, characters }) => {
  return alter_ego === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  //Creo una constante para almacenar el src de mi imagen que lo tengo en la carpeta assets, así que sólo cambia el id de la imagen que coincide con el del array (getHeroesByPublish)//
  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className="col ">
      <div className="card ">
        <div className="row no-gutters ">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text"> {alter_ego}</p>

              <CharactersByHero alter_ego={alter_ego} characters={characters} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              {/* Linkeo una página hero con su id para que sea personal al clickear en más info*/}
              <Link to={`/hero/${id}`}>Más info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
