import { Book, Cover, MoreInfo, ContentInBook } from "../../ui/style/cards";

//Creo un mini componente aquí para comprobar que no se repitan los actores del personaje con el villano, en vez de hacerlo en un componente aparte lo pongo acá//
const CharactersByHero = ({ alter_ego, characters }) => {
  return alter_ego === characters ? <></> : <p>{characters}</p>;
};
export const HeroCards = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  //Creo una constante para almacenar el src de mi imagen que lo tengo en la carpeta assets, así que sólo cambia el id de la imagen que coincide con el del array (getHeroesByPublish)//
  const heroImageUrl = `./../../../assets/heroes/${id}.jpg`;
  return (
    <Book className=" animate__animated animate__jello">
      <img src={heroImageUrl} alt={superhero} />
      <ContentInBook>
        <p> {alter_ego}</p>
        <CharactersByHero alter_ego={alter_ego} characters={characters} />

        <p>{first_appearance}</p>
        {/* Linkeo una página hero con su id para que sea personal al clickear en más info*/}
        <MoreInfo to={`/hero/${id}`}>More info...</MoreInfo>
      </ContentInBook>
      <Cover className="cover">
        <img src={heroImageUrl} alt={superhero} />
        <h5>{superhero}</h5>
      </Cover>
    </Book>
  );
};
