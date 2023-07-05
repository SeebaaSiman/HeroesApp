import { HeroCards } from "./";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { useMemo } from "react";

export const HeroesList = ({ publisher }) => {
  const heroe = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
      <h1 className="mb-4 animate__animated animate__jello">{publisher}</h1>

      <div className="row rows-cols-1 row-cols-md-3 g-3 justify-content-center">
        {heroe.map((hero) => (
          <HeroCards key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};
