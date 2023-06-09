import { HeroCard } from "./HeroCard";
import { useGetPublisher } from "../hooks/useGetPublisher";
import { PageContainer } from "../../ui/style/StyleGlobal";

export const HeroesList = ({ publisher }) => {
  const { superheroesData } = useGetPublisher(publisher);

  return (
    <PageContainer>
      <h1 className="mb-4 animate__animated animate__jello">{publisher}</h1>
      <div className="row rows-cols-1 row-cols-md-3 g-3 justify-content-center">
        {superheroesData.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </PageContainer>
  );
};
