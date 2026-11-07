import React from 'react'

const Card = ({postData, deleteHandler, setTitle, setDesc, setEdit}) => {
    // console.log(postData)
  return (
    <div className='w-full flex flex-wrap gap-5 mt-5'>
        {postData.map((item, idx)=>(
            <div key={idx} className='  bg-emerald-500 text-white rounded-xl p-4 flex flex-col justify-center items-center'>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex gap-2'>
                <button onClick={()=> deleteHandler(idx)} className='bg-red-400 px-3 mt-5 hover:cursor-pointer rounded-md text-xl font-bold'>Delete Card</button>
                <button onClick={()=>{
                    setTitle(item.title)
                    setDesc(item.desc)
                    setEdit(idx)
                }}
                className='bg-yellow-400 px-3 mt-5 hover:cursor-pointer rounded-md text-xl text-black font-bold'>Edit Card</button>
                </div>
            </div>
        ))}

    </div>
  )
}

export default Card