import { useState } from "react";

function Son() {
  const [name,setName]=useState('')
  const setName1=(value)=>{
    setName(value)
  }
  const nameChange=(e)=>{
    console.log(e.target.value)
    setName1(e.target.value)
  } 
  return (
    <div>
       <input onChange={
        nameChange
       } value={name}></input>
    </div>
  );
}

export default Son;