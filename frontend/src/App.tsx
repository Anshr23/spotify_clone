import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast"

const HomePage = lazy(() => import("./pages/HomePage"));
const AuthcallbackPage = lazy(() => import("./pages/AuthcallbackPage"));
const MainLayout = lazy(() => import("./layout/MainLayout"));
const ChatPage = lazy(() => import("./pages/ChatPage"));
const AlbumPage = lazy(() => import("./pages/AlbumPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));



function App() {
  
  return (
    <>
      <Suspense fallback={<div className="p-4 text-sm text-zinc-400">Loading...</div>}>
        <Routes>
          <Route path='/sso-callback' element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"}/> } />
          <Route path="/auth-callback" element={<AuthcallbackPage/>}/>
          <Route path="/admin" element={<AdminPage/>}/>

          <Route element={<MainLayout/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/chat" element={<ChatPage/>}/>
            <Route path="/albums/:albumId" element={<AlbumPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </Suspense>
      <Toaster/>
    </>
  );
}

export default App
