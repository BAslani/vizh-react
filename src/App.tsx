import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SubmitPage from "./pages/SubmitPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit/:id" element={<SubmitPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App