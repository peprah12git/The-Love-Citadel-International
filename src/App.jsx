import { BrowserRouter, Routes, Route } from "react-router-dom"
import Members from "./pages/Members";
import Ministry from "./pages/Ministry";
import MinistryDetails from "./pages/MinistryDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Members />} />
        <Route path="/members" element={<Members />} />
        <Route path="/ministries" element={<Ministry />} />
        <Route path="/ministries/:id" element={<MinistryDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
