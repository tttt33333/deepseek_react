import './ChatBox.css'
import { useState } from 'react'
import { createContext } from 'react'

export const ChatContext = createContext({
  chatList: [],
  setChatList: () => {},
})

function ChatBox() {
  
  const [chatList,setChatList] = useState([
    {
      id:1,
      name:'查询react相关问题'
    },
    {
      id:2,
      name:'查询vue相关问题'
    },
  ])

  return (
    <div className='colomns'>
      <span className='title'>自制超简易版deepseak～</span>
      <button className='btn'>开启新对话</button>

      <div className='chatList'>
        {chatList.map(item=>(
          <div className='chatItem' key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}
export default ChatBox
