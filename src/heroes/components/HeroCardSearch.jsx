import { Book, Cover, MoreInfo, ContentInBook } from "../../ui/style/cards";

export const HeroCardSearch = ({ image, name, biography, appearance }) => {
  return (
    <Book className=" animate__animated animate__jello">
      <img src={image.url} alt={name} />
      <ContentInBook>
        <p>{appearance.race}</p>
        <p> {biography?.["first-appearance"]}</p>
        <p> {biography?.["place-of-birth"]}</p>

        {/* Linkeo una página hero con su id para que sea personal al clickear en más info*/}
        <MoreInfo to={`/hero/${name}`}>More info...</MoreInfo>
      </ContentInBook>
      <Cover className="cover">
        <img src={image.url} alt={name} />
        <h5>{name}</h5>
      </Cover>
    </Book>
  );
};
