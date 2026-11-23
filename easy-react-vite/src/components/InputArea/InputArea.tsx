import './InputArea.css'
import { useRef, useState } from 'react'

function InputArea() {
  const [inputValue,setInputValue] = useState('')
  const [inputList, setInputList] = useState<{id: number; question: string; answer: string}[]>([]) 
  const nextId = useRef(1)

   function sendMsg(){
    if(inputValue.trim() === ''){
      console.log('请输入内容')
      return
    }else{
      setInputList([...inputList, {
        id: nextId.current++,
        question: inputValue,
        answer: '生成中，请稍后。。'
      }])
      setInputValue('')
      console.log(inputList)

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
