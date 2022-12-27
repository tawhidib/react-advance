import React from "react";
import Toggler from "./render-props/Toggler";

function Favorite() {
  return (
    <Toggler
      defaultOnValue={false}
      render={(on, toggle) => (
        <div>
          <h3>Click heart to favorite</h3>
          <h1>
            <span onClick={toggle}>{on ? "❤️" : "♡"}</span>
          </h1>
        </div>
      )}
    />
  );
}

export default Favorite;
