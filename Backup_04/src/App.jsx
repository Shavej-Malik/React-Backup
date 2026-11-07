import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from './Component/Card'
const App = () => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const [postData, setPostData] = useState(JSON.parse(localStorage.getItem("FormData")) || [])

  const [edit, setEdit] = useState(null)

  useEffect(()=>{
    localStorage.setItem("FormData", JSON.stringify(postData))
  },[postData])


  const submithamdler = (e)=>{
    e.preventDefault()
    // console.log(title, desc)

    if(edit != null){
      const copy = [...postData]
      copy[edit] = {title, desc}
      setPostData(copy)
      setEdit(null)
    }
    else{
      const copyArr = [...postData]
      copyArr.push({title, desc})
      // console.log(copyArr)
      setPostData(copyArr)
    }
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (idx)=>{
    // console.log(idx)
    const copyArr = [...postData]
    copyArr.splice(idx,1)
    setPostData(copyArr)
  }

  return (
    <div className='h-screen w-full p-5'>
      <form onSubmit={submithamdler}
      className='h-50 w-60 bg-red-800 rounded-xl p-4 flex flex-col gap-5 items-center' >
        <input value={title} onChange={(e)=>{
          // console.log(e.target.value)
          setTitle(e.target.value)
        }}
        className='p-2 border border-amber-50 rounded-xl' type="text" placeholder='Enter Your name' />
        <input value={desc} onChange={(e)=>{
          // console.log(e.target.value)
          setDesc(e.target.value)
        }}
        className='p-2 border border-amber-50 rounded-xl' type="text" placeholder='Enter Your desc' />
        <button className='bg-blue-400 px-3 rounded-md text-2xl font-bold'>Submit</button>
      </form>
      <Card postData = {postData} deleteHandler = {deleteHandler} setTitle = {setTitle} setDesc = {setDesc} setEdit = {setEdit} />
    </div>
  )
}

export default App