import { useEffect, useState } from 'react'
import './App.css'
import LeftMain from './Components/leftMain'
import RightMain from './Components/rightMain'



function App() {

  return (
    <div className=' flex flex-wrap text-white font-body1 bg-ThirdMainBack bg-cover h-screen'>
      <LeftMain />
      <RightMain />
    </div>
  )
}

export default App
