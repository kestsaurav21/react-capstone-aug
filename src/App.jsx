import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Movie from './pages/Movie'
import Recommendation from './pages/recommendation'
import Widgets from './pages/Widgets'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/widgets" element={<Widgets />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
