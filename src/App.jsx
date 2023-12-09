import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button.jsx'

const colors = [
  {
    name:'Red', hex:'#FF0000'
  },

  {
    name:'Blue', hex:'#0000FF'
  },
  {
    name:'Yellow', hex:'#FFFF00'
  },
  {
    name:'Green', hex:'#00FF00'
  },
  {
    name:'Purple', hex:'#800080'
  },
  {
    name:'Orange', hex:'#FFA500'
  },
  {
    name:'Cyan', hex:'#00FFFF'
  },
  {
    name:'Pink', hex:'#FFC0CB'
  },
  {
    name:'Brown', hex:'#A52121'
  },
  {
    name:'Teal', hex:'#008080'
  },
  {
    name:'Indigo', hex:'#4B00B2'
  },
  {
    name:'Lavender', hex:'#E6E6FA'
  },
  {
    name:'Maroon', hex:'#800000'
  },
  {
    name:'Gold', hex:'#FFd700'
  },
  {
    name:'Olive', hex:'#808000'
  },
]


function App() {
  const [selectedColor, setColor] = useState(colors[1].hex);

  const changeBackground=(color)=>{
    setColor(color)
  }

  return (
   <div className='h-screen p-3'
   style={{background: selectedColor}}>
    <div className='bg-gray-100 p-2 round-md shadow'>
      {
        colors.map((color)=> <Button key={color.hex} title={color.name} color={color.hex} onClick={changeBackground}/>)
      }
     

    </div>

   </div>
  )
}

export default App
