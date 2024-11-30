import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Movie from './pages/Movie'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movie/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
