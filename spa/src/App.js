import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Track from "./Pages/Track";
import History from "./Pages/History";
import Styleguide from "./Pages/Styleguide";
import Essay from "./Pages/Essay";
import Artwork from "./Pages/Artwork";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track" element={<Track />} />
          <Route path="/history" element={<History />} />
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/essay" element={<Essay />} />
          <Route path="/artwork" element={<Artwork />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
