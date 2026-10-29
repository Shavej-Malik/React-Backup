import React from 'react'
import Card from './Component/Card'

const App = () => {

  const person = [
    {
      url:"https://i.pinimg.com/736x/41/99/da/4199da886e647680cbe340d93d7561cf.jpg",
      name: "Rahul Kumar",
      age:23,
      desc:"I am a Software Engineer ",
      button: "Follow me"
    },
    {
      url:"https://i.pinimg.com/736x/64/25/90/6425904c22968c0fbf11717710178c76.jpg",
      name: "Vicky Kumar",
      age:21,
      desc:"I am a cat Lover",
      button: "Follow me"
    },
    {
      url:"https://i.pinimg.com/736x/19/1f/47/191f470a1693dea39db9076dbb046c19.jpg",
      name: "Priya Kumari ",
      age:19,
      desc:"I am a Digital Marketer",
      button: "Follow me"
    },
  ]

  return (
    <div className="app">
      <Card data = {person} />
    </div>
  )
}

export default App