import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RootLayout from "./components/RootLayout"
import Notfound from "./pages/Notfound"
import Sharedhosting from "./pages/Sharedhosting"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path="sharedhosting" element={<Sharedhosting/>} />
        <Route path="*" element={<Notfound/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
