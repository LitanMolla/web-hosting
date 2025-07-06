import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RootLayout from "./components/RootLayout"
import Notfound from "./pages/Notfound"
import Sharedhosting from "./pages/Sharedhosting"
import LinuxVpsHosting from "./pages/LinuxVpsHosting"
import PrivacyPolicy from "./pages/PrivacyPolicy"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path="sharedhosting" element={<Sharedhosting/>} />
        <Route path="LinuxVpsHosting" element={<LinuxVpsHosting/>} />
        <Route path="privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="*" element={<Notfound/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
