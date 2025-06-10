import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AuthcallbackPage from "./pages/AuthcallbackPage"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route 
          path='/sso-callback' 
          element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />
          }/>
        <Route path="/auth-callback" element={<AuthcallbackPage/>}/>
      </Routes>
    </>
  );
}

export default App
