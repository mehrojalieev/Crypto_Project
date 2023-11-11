import { Routes, Route } from "react-router-dom"
import CryptoView from "./crypto-view/CryptoView"
import Home from './home/Home'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cryptoView/:id" element={<CryptoView/>}/>
    </Routes>
  )
}

export default AllRoutes