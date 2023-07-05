import { useParams, Navigate, useNavigate } from "react-router-dom";
import { ButtonBack, ContainerLeft, HeroPageContainer } from "../../ui/style/heroPage";
import { useGetHeroPage } from "../hooks/useGetHeroPage";
import { CardPowerstats } from "../components/hero-stats/CardPowerstats";
import { CardInfo } from "../components/hero-stats/CardInfo";
import { CardImg } from "../components/hero-stats/CardImg";

export const HeroPage = () => {
  //Aquí desestructuro el nombre de la referencia a los params que le dí en heroesRouters, con hero/:id//
  const { id } = useParams();
  //Hook para navegar//
  const navigate = useNavigate();
  //Importo el memo para que no renderice la fx que llama a los datos de los héroes, cada vez que pasa algo en el componente. De esta manera al memorizarlo en memoria, nada más cambia cuando cambie el [ id  ] //
  const { hero } = useGetHeroPage(id); //Usa el params del router /://
  //Al poner -1 me lleva atrás al historial web, puede sacar al usuario de mi pág, no muy recomendado//
  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/dc" />;
  }
  const depur = hero?.data?.results[0];
  return (
    <>
      <ButtonBack onClick={onNavigateBack}>Back</ButtonBack>

      <HeroPageContainer>
        <ContainerLeft>
          <CardImg depur={depur} />
          <CardPowerstats depur={depur} />
        </ContainerLeft>

        <ContainerLeft>
          <CardInfo depur={depur} />
        </ContainerLeft>
      </HeroPageContainer>
    </>
  );
};
