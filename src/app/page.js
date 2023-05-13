"use client"
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState("");

  const buton = (e) =>{ 
    setResult(result.concat(e.target.name));
  }
  
  const Calculate = () => {
    setResult(eval(result).toString());
  }
  const backspace =()=>{
    setResult(result.slice(0, -1))
  }

  const reset =()=>{
    setResult("")
  }
  return (
   <div  class="flex flex-col justify-center items-center min-h-screen bg-gray-100">
    <div class="flex justify-center items-center mt-5">
    <hi class="font-bold text-2xl">Calculator</hi>
    </div>
    <div class="relative w-full max-w-md mt-5 bg-gray-200 rounded-lg border-2 border-gray-300 p-5" >
    <form class="flex justify-end items-center mb-3">
      <input  class="flex-1 w-full h-12 px-3 rounded-lg border-2 border-gray-300 text-right text-lg font-bold" type="text" value={result}></input>
    </form>
   
      <div class="flex justify-center items-center mt-5 ">
        <div class="flex-initial w-20 h-7 bg-blue-500 rounded-md text-center mr-2"><button name="7"onClick={buton}>7</button></div>
        <div class="flex-initial w-20 h-7 bg-blue-500 rounded-md text-center mr-2"><button name="8"onClick={buton}>8</button></div>
        <div class="flex-initial w-20 h-7 bg-blue-500 rounded-md text-center mr-2"><button name="9"onClick={buton}>9</button></div>
        <div class="flex-initial w-20 h-7 bg-red-500 rounded-md text-center mr-2"><button onClick={backspace}>Del</button></div>
      </div>
      <div class="flex justify-center items-center mt-3 ">
      <button class="flex-initial w-20 h-7 bg-blue-500 rounded-md text-center mr-2" name="4"onClick={buton}>4</button>
      <button class="flex-initial w-20 h-7 bg-blue-500 rounded-md text-center mr-2" name="5"onClick={buton}>5</button>
      <button class="flex-initial w-20 h-7 bg-blue-500 rounded-md text-center mr-2" name="6"onClick={buton}>6</button>
      <button class="flex-initial w-20 h-7 bg-red-500 rounded-md text-center mr-2" name="+"onClick={buton}>+</button>
      </div>
      <div class="flex justify-center items-center mt-3 ">
      <button class="flex-initial w-20 h-7 bg-blue-500 rounded-md text-center mr-2"  name="1"onClick={buton}>1</button>
      <button class="flex-initial w-20 h-7 bg-blue-500 rounded-md text-center mr-2" name="2"onClick={buton}>2</button>
      <button class="flex-initial w-20 h-7 bg-blue-500 rounded-md text-center mr-2" name="3"onClick={buton}>3</button>
      <button class="flex-initial w-20 h-7 bg-red-500 rounded-md text-center mr-2" name="-"onClick={buton}>-</button>
      </div>

      <div class="flex justify-center items-center mt-3 ">
      <button class="flex-initial w-20 h-7 bg-blue-500 rounded-md text-center mr-2" name="."onClick={buton}>.</button>
      <button class="flex-initial w-20 h-7 bg-blue-500 rounded-md text-center mr-2" name="0"onClick={buton}>0</button>
      <button class="flex-initial w-20 h-7 bg-red-500 rounded-md text-center mr-2" name="/"onClick={buton}>/</button>
      <button class="flex-initial w-20 h-7 bg-red-500 rounded-md text-center mr-2" name="*"onClick={buton}>*</button>
      </div>
      <div class="flex justify-center items-center mt-3 ">
        <button class="flex-initial w-40 h-7 bg-blue-500 rounded-md text-center mr-2"  onClick={reset}>Reset</button>
        <button class="flex-initial w-40 h-7 bg-red-500 rounded-md text-center mr-2"  onClick={Calculate}>=</button>
      </div>

    </div>

   
    </div>
  )
}
