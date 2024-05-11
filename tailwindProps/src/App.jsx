import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("yellow")

  return (
    <div className=' w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap bottom-12 justify-center  inset-x-0'>
       <div className=' flex flex-wrap justify-center bg-white gap-3 shadow-lg  rounded-3xl outline-none px-4  py-2'>
        <button 
        onClick={ () =>setColor("red") }        
        className='outline-none px-4   py-1 rounded-full'
        style={{backgroundColor:"red"}}
        >

          Red
        </button>
        <button 
        onClick={ () =>setColor("white") }        
        className='outline-none text-black px-4 py-1 rounded-full'
        style={{backgroundColor:"white"}}
        >

          White
        </button>
        <button 
        onClick={ () =>setColor("green") }        
        className='outline-none px-4   py-1 rounded-full'
        style={{backgroundColor:"green"}}
        >

          green
        </button>
        <button 
        onClick={ () =>setColor("black") }        
        className='outline-none text-white px-4 py-1 rounded-full'
        style={{backgroundColor:"black"}}
        >

        Black
        </button>


        <button 
        onClick={ () =>setColor("pink") }        
        className='outline-none px-4 py-1 rounded-full'
        style={{backgroundColor:"pink"}}
        >

          pink
        </button>

        
        <button 
        onClick={ () =>setColor("purple") }        
        className='outline-none text-white px-4 py-1 rounded-full'
        style={{backgroundColor:"purple"}}
        >

          Purple
        </button>
        <button 
        onClick={ () =>setColor("olive") }        
        className='outline-none px-4 py-1 rounded-full'
        style={{backgroundColor:"olive"}}
        >

          Olive
        </button>
        <button 
        onClick={ () =>setColor("orange") }        
        className='outline-none px-4 py-1 rounded-full'
        style={{backgroundColor:"orange"}}
        >

          Orange
        </button>
       </div>
      </div>

    </div>
  )
}

export default App
