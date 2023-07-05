import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroesById } from "../helpers";
import {
  ButtonBack,
  CardImage,
  ContentContainer,
  HeroPageContainer,
} from "../../ui/style/heroPage";

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
  const srcImage = `/assets/heroes/${id}.jpg`;
  return (
    <>
      <ButtonBack onClick={onNavigateBack}>Back</ButtonBack>
      <HeroPageContainer>
        <CardImage className="animate__animated animate__fadeInLeft">
          <img src={srcImage} alt={hero.superhero} />
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
