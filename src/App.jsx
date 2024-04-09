import video from "./assets/vecteezy_minimalist-blue-low-poly-wireframe-motion-background_21889657.mp4";
import MainContainer from "./containers/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import { useState } from "react";
import BookLoader from "./containers/BookLoader/BookLoader";
import BookSearch from "./components/BookSearch/BookSearch";
import Pagination from "./components/Pagination/Pagination";
import FlexBox from "./containers/FlexBox/FlexBox";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  return (
    <div className="main">
      <video id="backgroundVideo" className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <MainContainer>
        <FlexBox>
          <HeaderContainer>
            <Header />
            <BookSearch onSearch={onSearch} />
          </HeaderContainer>
          <BookLoader searchTerm={searchTerm} startIndex={startIndex} />
        </FlexBox>
        <Pagination startIndex={startIndex} setStartIndex={setStartIndex} />
      </MainContainer>
    </div>
  );
}

export default App;
