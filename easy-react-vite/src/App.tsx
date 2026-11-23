import { useState,useRef } from 'react'
import ChatBox from './components/ChatBox/ChatBox'
import InputArea from './components/InputArea/InputArea'
import './App.css'

function App() {
  

  return (
    <>
     <div className='main'>
      <ChatBox />
      <InputArea />
     </div>
    </>
  )
}

export default App
