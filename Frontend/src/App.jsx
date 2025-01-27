import ContactPage from "./components/ContactPage"
import SignUp from "./components/SignUp"
import CoursesPage from "./CoursesPage/CoursesPage"
import HomePage from "./HomePage/HomePage"    //these are routes(in each route different page is shown)
import { Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider"

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={authUser ? <CoursesPage /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
