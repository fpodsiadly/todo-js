import { FaPlus } from 'react-icons/fa6'
import { useRef } from 'react'

const Input = (props) => {
  const inputBox = useRef()

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      props.handler(inputBox.current.value)
      inputBox.current.value = ''
      inputBox.current.focus()
    }
  }

  return (
    <div className="p-3 flex justify-around">
      <input
        type="text"
        ref={inputBox}
        placeholder="Enter data"
        className="p-3 focus:outline-none w-[90%] border border-slate-400 "
        onKeyDown={handleKeyPress}
      />
      <div
        className="cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] flex justify-center items-center"
        onClick={() => {
          props.handler(inputBox.current.value)
          inputBox.current.value = ''
          inputBox.current.focus()
        }}
      >
        <FaPlus />
      </div>
    </div>
  )
}

export default Input
