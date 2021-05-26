import React, { useState } from "react";
import Coin from "./Coin"

/** CoinFlip
 *
 * App -> CoinFlip -> Coin
 */
function CoinFlip(){
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);
  const [flipCount, setFlipCount] = useState(0);
  const [coinFace, setCoinFace] = useState("")

  function handleClick(){
  if (Math.random() > .5){
    setHeadCount(headCount + 1);
    setCoinFace("heads");
  } else {
    setTailCount(tailCount + 1);
    setCoinFace("tails");
  }
  setFlipCount(flipCount + 1);
};

  return (
    <div>
      {coinFace === "" ? null : <Coin face={coinFace}/>}
      <div>
      <button onClick={handleClick}>Flip</button>
      </div>
      <div>
        <p>Out of {flipCount} flips {headCount} were heads, {tailCount} were tails</p>
      </div>
    </div>
  )
}

export default CoinFlip;