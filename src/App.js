import React from 'react'
import Login from './components/Login'
import './App.css'
import Dasbord from './components/Dasboard'
import Main from './components/Main'
import Tree from './components/Tree'


export default function App() {
  return (
    <div>
      {/* <Login/> */}
      <Dasbord/>
      <Tree/>
      {/* <Main/> */}
    </div>
  )
}
