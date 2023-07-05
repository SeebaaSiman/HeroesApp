import { Book, Cover, MoreInfo, ContentInBook } from "../../ui/style/cards";

export const HeroCard = ({ results }) => {
  const depur = results[0];
  return (
    <Book className=" animate__animated animate__jello">
      <img src={depur.image.url} alt={depur.name} />
      <ContentInBook>
        <p>{depur.appearance.race}</p>
        <p> {depur.biography?.["first-appearance"]}</p>
        <p> {depur.biography?.["place-of-birth"]}</p>

        {/* Linkeo una página hero con su id para que sea personal al clickear en más info*/}
        <MoreInfo to={`/hero/${depur.name}`}>More info...</MoreInfo>
      </ContentInBook>
      <Cover className="cover">
        <img src={depur.image.url} alt={depur.name} />
        <h5>{depur.name}</h5>
      </Cover>
    </Book>
  );
};
