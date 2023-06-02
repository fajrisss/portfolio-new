/* eslint-disable no-unused-vars */
import Layout from "./Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import Portfolio from "./page/Portfolio"
import About from "./page/About"
import Header from "./components/Header"


function App() {

  return (
    <div className="font-poppins min-h-screen  dark:bg-slate-800 dark:text-slate-300 text-slate-800 duration-300 ease-in-out">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
