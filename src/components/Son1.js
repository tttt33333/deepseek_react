import { useState } from "react";
import { useRef } from "react";
import Son2 from './Son2'

function Son1(props) {
  props.fn_f('hhh')
  return (
    <div>
       <Son2></Son2>
    </div>
  );
}

export default Son1;