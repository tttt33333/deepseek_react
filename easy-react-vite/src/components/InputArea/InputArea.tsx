import './InputArea.css'
import { useRef, useState } from 'react'
import { sendChatMessage } from '../../api/chat'

function InputArea() {
  const [inputValue,setInputValue] = useState('')
  const [inputList, setInputList] = useState<{id: number; question: string; answer: string}[]>([]) 
  const nextId = useRef(1)

   async function sendMsg(){
    const question = inputValue.trim()
    if(question === ''){
      console.log('请输入内容')
      return
    }

    const id = nextId.current++
    setInputList(prev => [...prev, {
      id,
      question,
      answer: '生成中，请稍后。。'
    }])
    setInputValue('')

    try {
      const answer = await sendChatMessage([{ role: 'user', content: question }])
      setInputList(prev => prev.map(item =>
        item.id === id ? { ...item, answer } : item
      ))
    } catch (err) {
      console.error(err)
      setInputList(prev => prev.map(item =>
        item.id === id ? { ...item, answer: '请求失败，请稍后重试。' } : item
      ))
    }
  }
  return (
    <div className='inputArea'>
      <div className='chatItemList'>
        {inputList.map((item)=>(
          <div className='chatContentItem' key={item.id}>
            <div className='chatQuestion'>{item.question}</div>
            <div className='chatAnswer'>{item.answer}</div>
          </div>
        ))}
        
      </div>
      <div className='inputBox'>
        <textarea className='input' value={inputValue} onChange={(e) => setInputValue(e.target.value)} rows={1} />
        <button className='sendBtn' onClick={sendMsg}>发送</button>
      </div>
    </div>
  )
}
export default InputArea
