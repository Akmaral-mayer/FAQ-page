import React from "react";
import { partners } from "../../data";
import { PartnersBlock } from "./Partners.components";

export const Partners = () => {
  return (
    <PartnersBlock>
      <div>
        {partners.map((el, id) => {
          return <img key={id} src={el} alt="" />;
        })}
      </div>
    </PartnersBlock>
  );
};
