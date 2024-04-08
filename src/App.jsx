import video from "./assets/vecteezy_minimalist-blue-low-poly-wireframe-motion-background_21889657.mp4";
import MainContainer from "./containers/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import { useState } from "react";
import BookLoader from "./containers/BookLoader/BookLoader";
import BookSearch from "./components/BookSearch/BookSearch";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  return (
    <div className="main">
      <video id="backgroundVideo" className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <MainContainer>
        <Header />
        <BookSearch onSearch={onSearch} />
        <BookLoader searchTerm={searchTerm} />
      </MainContainer>
    </div>
  );
}

export default App;
