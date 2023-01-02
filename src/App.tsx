import { Typography } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import ArrayMethods from "./JavaScript/ArrayMethods"
import JavaScript from "./JavaScript/JavaScript"

function App() {
  return (
    <>
    <Typography variant="h6" component="h1" align="right">CheatSheet</Typography>
     
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/JavaScript' element={<JavaScript />} />
        <Route path='/ArrayMethods' element={<ArrayMethods />} />
      </Routes>
      
    </BrowserRouter>
    
    </>
  )
}

export default App
