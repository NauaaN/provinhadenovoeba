import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/home'
import CorPrimaria from './pages/corPrimaria'
import FreqCaract from './pages/freqCaract'
import IngrssoCinema from './pages/ingrssoCinema'
import MaiorNum from './pages/maiorNum'

export default function siteRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/corPrimaria" element={<CorPrimaria />} />
            <Route path="/freqCaract" element={<FreqCaract />} />
            <Route path="/ingrssoCinema" element={<IngrssoCinema />} />
            <Route path="/maiorNum" element={<MaiorNum />} />

        </Routes>
        </BrowserRouter>
    )
}