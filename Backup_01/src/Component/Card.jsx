import React from 'react'

const Card = (props) => {
    console.log(props.data)
  return (
    <div className='main-cards'>
        {props.data.map((item)=>{
            return <div className="card">
            <img src={item.url} alt="" />
            <h1>{item.name}</h1>
            <p>{item.age}</p>
            <p>{item.desc}</p>
            <button>{item.button}</button>
            </div>
        })}
    </div>
  )
}

export default Card