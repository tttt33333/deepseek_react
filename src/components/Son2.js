import { useContext, useState } from "react";
import { useRef } from "react";
import { Ctx } from "../App";

function Son2(props) {
  const btn=()=>{
    // console.log(props,'99')
   
  }
   const msg = useContext(Ctx);
    console.log(msg,'99')
  return (
    <div>
       <input onClick={btn}></input>
    </div>
  );
}

export default Son2;