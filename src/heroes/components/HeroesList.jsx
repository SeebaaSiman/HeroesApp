import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { useMemo } from "react";
import { HeroCards } from "./HeroCards";

export const HeroesList = ({ publisher }) => {
  const heroe = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
      <h1 className="mb-4 animate__animated animate__jello">{publisher}</h1>

      <div className="row rows-cols-1 row-cols-md-3 g-3">
        {heroe.map((hero) => (
          // <HeroCard key={hero.id} {...hero} />
          <HeroCards key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};
