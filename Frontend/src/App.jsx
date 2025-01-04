import ContactPage from "./components/ContactPage"
import SignUp from "./components/SignUp"
import CoursesPage from "./CoursesPage/CoursesPage"
import HomePage from "./HomePage/HomePage"    //these are routes(in each route different page is shown)
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/course" element={<CoursesPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
