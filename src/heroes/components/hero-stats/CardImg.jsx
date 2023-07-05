import React from "react";
import { CardImage } from "../../../ui/style/heroPage";

export const CardImg = ({ depur }) => {
  const srcImage = depur?.image?.url;

  return (
    <CardImage className="animate__animated animate__fadeInLeft">
      <img src={srcImage} alt={depur?.name} />
    </CardImage>
  );
};
