import React from "react";

import compass from "../../images/compass.svg";

export const NothingSelected = () => {
  return (
    <div className="nothing__main-content">
      <h3>
        Select some note <br />
        or create an entry
      </h3>
      <img src={compass} alt="compass logo" />
    </div>
  );
};
