import { styled } from "styled-components";
import { Link } from "react-router-dom";
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
      <div>
        <p> {alter_ego}</p>

        <CharactersByHero alter_ego={alter_ego} characters={characters} />

        <p>
          <small>{first_appearance}</small>
        </p>
        {/* Linkeo una página hero con su id para que sea personal al clickear en más info*/}
        <MoreInfo to={`/hero/${id}`}>More info...</MoreInfo>
      </div>
      <Cover className="cover">
        <img src={heroImageUrl} alt={superhero} />
        <h5>{superhero}</h5>
      </Cover>
    </Book>
  );
};
const Book = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0.2rem;
  border-radius: 10px;
  width: 220px;
  height: 300px;
  background-color: whitesmoke;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  -webkit-transform: preserve-3d;
  -ms-transform: preserve-3d;
  transform: preserve-3d;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #000;
  &:hover .cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-80deg);
    -ms-transform: rotatey(-80deg);
    transform: rotatey(-80deg);
  }
  img {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
  }
  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    color: red;
    font-size: 1.2rem;
  }
`;

const Cover = styled.div`
  top: 0;
  position: absolute;
  background-color: lightgray;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform-origin: 0;
  -ms-transform-origin: 0;
  transform-origin: 0;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  h5 {
    position: absolute;
    top: 1%;
    color: #000;
    padding: 3px;
    background-image: linear-gradient(
      to top,
      #d8d9db 0%,
      #fff 80%,
      #fdfdfd 100%
    );
    border-radius: 30px;
    border: 1px solid #8f9092;
  }
  img {
    width: 100%;
    height: 100%;
    filter: grayscale(0%);
  }
`;
const MoreInfo = styled(Link)`
  text-decoration: none;
`;
