import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroesById } from "../helpers";
import { styled } from "styled-components";
import { device } from "../../ui/StyleGlobal";

export const HeroPage = () => {
  //Aquí desestructuro el nombre de la referencia a los params que le dí en heroesRouters, con hero/:id//
  const { id } = useParams();
  //Hook para navegar//
  const navigate = useNavigate();
  //Importo el memo para que no renderice la fx que llama a los datos de los héroes, cada vez que pasa algo en el componente. De esta manera al memorizarlo en memoria, nada más cambia cuando cambie el [ id  ] //
  const hero = useMemo(() => getHeroesById(id), [id]); //Usa el params del router /://

  //Al poner -1 me lleva atrás al historial web, puede sacar al usuario de mi pág, no muy recomendado//
  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/dc" />;
  }
  return (
    <>
      <ButtonBack
        // className="btn btn-outline-primary"
        onClick={onNavigateBack}
      >
        Back
      </ButtonBack>

      <HeroPageContainer>
        <CardImage className="animate__animated animate__fadeInLeft">
          <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} />
        </CardImage>

        <ContentContainer className="animate__animated animate__fadeInRight">
          <h3>{hero.superhero}</h3>
          <ul>
            <li>
              <b>Alter ego:</b>
              {hero.alter_ego}
            </li>
            <li>
              <b>Publisher:</b>
              {hero.publisher}
            </li>
            <li>
              <b>First appearance:</b>
              {hero.first_appearance}
            </li>
          </ul>
          <h5>Characters</h5>
          <p>{hero.characters}</p>
        </ContentContainer>
      </HeroPageContainer>
    </>
  );
};
const HeroPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  @media ${device.md} {
    flex-direction: row;
    justify-content: space-around;
  }
`;
const ButtonBack = styled.button`
  margin: 1rem;
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #ff5252;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff;
    color: #ff5252;
    border: 2px solid #ff5252;
    box-shadow: 5px 5px 0px #ff5252;
  }
  &:active {
    background-color: #fcf414;
    box-shadow: none;
    transform: translateY(4px);
  }
`;
const CardImage = styled.div`
  margin: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  border-radius: 10px;
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.md} {
    margin-left: 0;
    margin-right: 0;
    width: 35%;
  }
  img {
    object-fit: cover;
  }
`;
const ContentContainer = styled(CardImage)`
  flex-direction: column;
`;
