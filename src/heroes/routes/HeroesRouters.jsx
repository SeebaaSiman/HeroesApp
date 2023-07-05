import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar, StyleGlobal } from "../../ui";
import { DCPage, HeroPage, MarvelPage, SearchPage, StarWars } from "../pages";

export const HeroesRouters = () => {
  return (
    <>
      <Navbar />
      <StyleGlobal />
      <>
        {/* Aquí en las routes, cada route es una ruta que al poner /path con su path lleva al element pág  */}
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="star-wars" element={<StarWars />} />
          <Route path="search" element={<SearchPage />} />
          {/* Aquí abajo será la ruta de cada héroe según su Id, así que luego de hero/ pongo dos puntos y un nombre que usaré como parámetro con el useParams para indicar  */}
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/dc" />} />
        </Routes>
      </>
    </>
  );
};
