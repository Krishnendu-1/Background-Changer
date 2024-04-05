import React, { useState } from 'react'
//This is classic way after pressing onclick
// var change=()=>{
//   document.querySelector("h2").style.color="blue";
//   document.querySelector("h2").style.backgroundColor="white";
//   document.querySelector("div").style.backgroundColor="black";
//   console.log("clicked")
// }
function App() {
  let [color, setColor]=useState("white");

  return (
    <div className=' w-screen h-screen flex justify-end flex-col' style={{backgroundColor:color}}>
     {/* <h2  className=' absolute top-0 left-1/2 h-auto w-auto  m-5 text-center text-2xl italic font-semibold' >Hello world</h2> */}
     <div className='flex justify-evenly flex-row m-5 flex-wrap'>
     <button onClick={()=>{setColor("red");    console.log("clicked")}} className='bg-red-700 text-center text-cyan-50 max-w-fit p-2     h-auto rounded-xl flex justify-center' >Red</button>
     <button onClick={()=>{setColor("blue");    console.log("clicked")}} className='bg-cyan-200 text-center text-gray-800 max-w-fit p-2   h-auto rounded-xl flex justify-center' >Blue</button>
     <button onClick={()=>{setColor("orange");  console.log("clicked")}} className='bg-orange-600 text-center text-cyan-50 max-w-fit p-2 h-auto  rounded-xl flex justify-center'>Orange</button>
     <button onClick={()=>{setColor("violet");  console.log("clicked")}} className='bg-violet-800 text-center text-cyan-50 max-w-fit p-2 h-auto  rounded-xl flex justify-center'>Violet</button>
     <button onClick={()=>{setColor("yellow");  console.log("clicked")}} className='bg-yellow-200 text-center text-cyan-500 max-w-fit p-2 h-auto  rounded-xl flex justify-center'>Yellow</button>
    
     </div>
     </div>
  )
}

export default App
