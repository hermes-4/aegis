import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";

function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path=""/>
    </Routes>
    </>
  )
}

export default App