import React, { useState } from "react";
import heads from "./heads.jpg"
import tails from "./tails.jpg"
/** Coin
 * 
 * Props:
 * -face
 *
 * CoinFlip -> Coin
 */
function Coin(props){
const { face } = props;



return (
  <div>
    <img src={face === "heads"? heads : tails}/>
  </div>
)
}

export default Coin;