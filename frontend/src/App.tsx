import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AuthcallbackPage from "./pages/AuthcallbackPage"
import { axiosInstance } from "./lib/axios"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth-callback" element={<AuthcallbackPage/>}/>
      </Routes>
    </>
  );
}

export default App
