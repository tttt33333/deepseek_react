import { useState } from "react";
import './App.css';

const msg="Hello React!";

const fn=()=>{
  return "Hello React!";
}

const list=['111','222','333'];

const x=true

const y=1
const fn1=()=>{
  if(y===1){
    return 1
  }else if(y===2){
    return 2
  }else{
    return 3
  }
} 
const handleClick=()=>{
  console.log('111')
} 
const handleClick1=(h,e)=>{
  console.log('111',h,e)
} 

function Button(){
  return (
    <button>11</button>
  ) 
}

const style={
  color:'red',
  fontSize:'15px'
}


function App() {
  const [form,setCount]=useState({
    name:'hh'
  })
  const handleClick2=()=>{
    // 做了两件事：用传入的新值修改count的值，并且触发组件重新渲染
  setCount({...form, name:'hh2'})
} 
  return (
    // <div className="App">
    //   {'hh'}
    //   {msg}
    //   {fn()}
    //   <div style={{color:'red',fontSize:'15px'}}>11</div>
    // </div>
    // <ul>
    //   {list.map((item,index)=>{
    //     return <li key={index}>{item}</li>
    //     }
    //   )}
    // </ul>
    // <div>
    //   {x ?<p>111</p>:<p>222</p>}
    //   {x && <p>111</p>}
    // </div>
    // <div>
    //   {y}
    // </div>
    // <div>
    //   <button onClick={(e)=>{handleClick1('hh',e)}}>11</button>
    // </div>
    // <div>
    //   {form.name}
    //   <button onClick={()=>{handleClick2()}}>11</button>
    // </div>
    <div>
       <div class="oo">11</div>
    </div>
  );
}

export default App;
