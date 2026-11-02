import React from 'react'
import { useState } from 'react'
const App = () => {

  const [count, setcount] = useState(0)

  const increment = ()=>{
    // setcount(count+1)
//This called Batch Updating
    // setcount((prev)=> prev+1)
    // setcount((prev)=> prev+1)
    // setcount((prev)=> prev+1)
    // setcount((prev)=> prev+1)
    // setcount((prev)=> prev+3)


  }
  return (
    <div className='m-10'>
      {/* <h1 className='text-6xl'>{a}</h1>
      <button onClick={()=>{
        a++
        console.log(a)
      }}
      className='text-4xl bg-yellow-800 px-3 py-2'>Click me</button> */}

      <h1 className='text-6xl'>{count}</h1>
      <button onClick={increment}
      className='text-4xl bg-yellow-800 px-3 py-2'>Click me</button>
    </div>
  )
}

export default App