import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Hasil from "./pages/Hasil"
import Pages from "./pages"
import { UserProvider } from "./providers/userContext"

function App() {
    return (
      <Router>
        <UserProvider>
          <Routes>
              <Route path="/" element={<Pages />} />
              <Route path="/quiz" element={<Home />} />
              <Route path="/hasil" element={<Hasil />} />
          </Routes>
        </UserProvider>
      </Router>
    )
}

export default App
