import { useState,useCallback } from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [number,setNumber] = useState(false)
  const [char,setChar]= useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      str += '0123456789'
    }
    if(char){
      str += "!@#$%&'*+,-./:;<=>?@[]{}~`"
    }

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)
  },[length,number,char,setPassword])

  return (
    <>
     <div className=' w-full max-w-md mx-auto shadow-md rounded-lg py-4 px-4 my-8 text-orange-500 bg-gray-700'>
     <h1 className=' text-4xl text-white text-center mb-4'>Password Generator</h1>
    <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={password} className=' outline-none w-full py-1 px-3' placeholder='password' readOnly />
      <button className=' bg-blue-700 outline-none'>Copy</button>
    </div>
     </div>
    </>
  )
}

export default App
