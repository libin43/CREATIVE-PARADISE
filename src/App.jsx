import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/LandingPage'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/home' element={<LandingPage/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
