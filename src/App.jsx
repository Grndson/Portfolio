import { Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio.jsx'
import Projects from './Projects.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App