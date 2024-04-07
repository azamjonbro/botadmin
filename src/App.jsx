import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './Main/Main.jsx'

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Main/>}/>
    </Routes>
  )
}

export default App