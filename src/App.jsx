
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen.jsx"


function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/react" element={<HomeScreen/>}/>
        </Routes>
      </Container>
    </Router>
  )
}

export default App
