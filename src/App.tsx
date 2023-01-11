import { Typography } from "@mui/material"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import ArrayMethods from "./JavaScript/ArrayMethods"
import JavaScript from "./JavaScript/JavaScript"
import ReactRouterDom from "./React/ReactRouterDom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Typography 
      variant="h6" 
      component="h1" 
      align="right"
      sx={{display:"inline", float:"right", textDecoration:"underline"}}>
        <Link to='/'>CheatSheet</Link>
    </Typography>
    
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
