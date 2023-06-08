import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroesById } from "../helpers";

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
  return (
    <div className="row mt-5">

      <div className="col-4 animate__animated animate__fadeInLeft">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"/>
      </div>

      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
