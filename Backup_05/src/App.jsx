import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
const App = () => {

  console.log("app rendering")

  const useRefHook = useRef({})
  console.log(useRefHook)

  const submitHandler = (e)=>{
    e.preventDefault()
    // console.log(e)
    // console.log(name,age)
  }
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <form onSubmit={submitHandler} className='h-60  bg-zinc-500 rounded-xl p-5 flex items-center flex-col gap-7'>
          <input ref={(e)=>{
            console.log(e)
          }} className='font-bold p-2 border-2 rounded  border-amber-500' type="text" placeholder='Enter your Name' />
          <input className='font-bold p-2 border-2 rounded  border-amber-500' type="number" placeholder='Enter your age' />
          <input className='bg-amber-500 font-bold text-2xl px-4 rounded-md' type="submit"/>
        </form>
    </div>
  )
}

export default App

//useRef basic -> prevent from continously rendering

// import React from 'react'
// import { useRef } from 'react'
// import { useState } from 'react'
// const App = () => {

//   console.log("app rendering")

//   const useRefHook = useRef()
//   const useRefHook1 = useRef()

//   const submitHandler = (e)=>{
//     e.preventDefault()
//     // console.log(e)
//     // console.log(name,age)
//     console.log(useRefHook.current.value)
//     console.log(useRefHook1.current.value)
//   }
//   return (
//     <div className='h-screen w-screen flex items-center justify-center'>
//         <form onSubmit={submitHandler} className='h-60 w-60 bg-zinc-500 rounded-xl p-5 flex items-center flex-col gap-7'>
//           <input ref={useRefHook} name='Shavej' className='font-bold p-2 border-2 rounded  border-amber-500' type="text" placeholder='Enter your Name' />
//           <input ref={useRefHook1} className='font-bold p-2 border-2 rounded  border-amber-500' type="number" placeholder='Enter your age' />
//           <input className='bg-amber-500 font-bold text-2xl px-4 rounded-md' type="submit"/>
//         </form>
//     </div>
//   )
// }

// export default App