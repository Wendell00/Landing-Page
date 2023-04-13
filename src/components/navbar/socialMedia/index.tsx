import React, { useState } from "react";

interface Props {
    social: string;
  }


export const ImageHover = (props: Props) =>{
  const [hoverStates, setHoverStates] = useState(false);

  return (
        <img
          src={hoverStates ? `./socialMedia/${props.social}-hover.svg` : `./socialMedia/${props.social}.svg`}
          onMouseOver={() => setHoverStates(true)}
          onMouseOut={() => setHoverStates(false)}
        />
  );
}
