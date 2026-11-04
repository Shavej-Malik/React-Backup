import React from 'react'
import { useState } from 'react'
const App = () => {

  const [name, setName] = useState()
  const [age, setAge] = useState()
  const submitHandler = (e)=>{
    e.preventDefault()
    // console.log(e)
    console.log(name,age)
  }
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <form onSubmit={submitHandler} className='h-60 w-60 bg-zinc-500 rounded-xl p-5 flex items-center flex-col gap-7'>
          <input value={name} onChange={(e)=>{
            // console.log(e.target.value)
            setName(e.target.value)
          }} className='font-bold p-2 border-2 rounded  border-amber-500' type="text" placeholder='Enter your Name' />
          <input value={age} onChange={(e)=> setAge(e.target.value)} className='font-bold p-2 border-2 rounded  border-amber-500' type="number" placeholder='Enter your age' />
          <input className='bg-amber-500 font-bold text-2xl px-4 rounded-md' type="submit"/>
        </form>
    </div>
  )
}

export default App