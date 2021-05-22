import React from "react";
import { SupportBlock } from "./Support.componets.jsx";

export const Support = () => {
  return (
    <SupportBlock>
      <h2>
        Still have questions? <br className="gap" /> Write to us
      </h2>
      <p>
        Our support team is ready to help you <br /> via <a>live chat</a> or{" "}
        <a>email</a> at every step of the way
      </p>
    </SupportBlock>
  );
};
