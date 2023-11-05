import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SubmitPage from "./pages/SubmitPage"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App