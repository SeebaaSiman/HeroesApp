import { ContentContainer } from "../../../ui/style/heroPage";

export const CardPowerstats = ({ depur }) => {
  return (
    <ContentContainer>
      <h4>Powerstats:</h4>
      <ul>
        <li>Combat: {depur?.powerstats.combat}</li>
        <li>Durability: {depur?.powerstats.durability}</li>
        <li>Intelligence: {depur?.powerstats.intelligence}</li>
        <li>Power: {depur?.powerstats.power}</li>
        <li>Speed: {depur?.powerstats.speed}</li>
        <li>Strength: {depur?.powerstats.strength}</li>
      </ul>
    </ContentContainer>
  );
};
