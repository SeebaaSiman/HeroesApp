import { ContentContainer, HeaderContent } from "../../../ui/style/heroPage";

export const CardInfo = ({ depur }) => {
  return (
    <ContentContainer className="animate__animated animate__fadeInRight">
      <h1>{depur?.name}</h1>
      <HeaderContent>
        <h4>Appearance:</h4>
        <ul>
          <li>Race: {depur?.appearance.race}</li>
          <li>Gender: {depur?.appearance.gender}</li>
          <li>Eye color: {depur?.appearance["eye-color"]}</li>
          <li>Hair color: {depur?.appearance["hair-color"]}</li>
          <li>
            Height: {depur?.appearance.height[0]} -{" "}
            {depur?.appearance.height[1]}
          </li>
          <li>
            Weight: {depur?.appearance.weight[0]} -{" "}
            {depur?.appearance.weight[1]}
          </li>
        </ul>
      </HeaderContent>
      <HeaderContent>
        <h4>Biography:</h4>
        <p>Aliases:</p>
        <ul>
          {depur?.biography.aliases.map((item, index) => (
            <li key={index}>
              <p>- {item}</p>
            </li>
          ))}
        </ul>
        <p>Alignment: {depur?.biography.alignment}</p>
        {depur?.biography["alter-egos"] === "No alter egos found." ? null : (
          <p>Alter egos: {depur?.biography["alter-egos"]}</p>
        )}
        <p>First appearance: {depur?.biography["first-appearance"]}</p>
        <p>Full name: {depur?.biography["full-name"]}</p>
        <p>Place of birth: {depur?.biography["place-of-birth"]}</p>
        <p>Publisher: {depur?.biography.publisher}</p>
      </HeaderContent>
      <HeaderContent>
        <h4>Connections:</h4>
        <ul>
          <li>Group affiliation: {depur?.connections["group-affiliation"]}</li>
          <li>Relatives: {depur?.connections.relatives}</li>
          <li>Base: {depur?.work.base}</li>
          {depur?.work.occupation === "-" ? null : (
            <li>Occupation: {depur?.work.occupation}</li>
          )}
        </ul>
      </HeaderContent>
    </ContentContainer>
  );
};
