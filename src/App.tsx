import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profiles from "./components/Profiles";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profiles />} />
          <Route path="profiles/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
