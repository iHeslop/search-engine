import video from "./assets/vecteezy_minimalist-blue-low-poly-wireframe-motion-background_21889657.mp4";
import MainContainer from "./containers/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import { useState } from "react";
import BookLoader from "./containers/BookLoader/BookLoader";
import BookSearch from "./components/BookSearch/BookSearch";
import Pagination from "./components/Pagination/Pagination";
import FlexBox from "./containers/FlexBox/FlexBox";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import ModalContainer from "./containers/ModalContainer/ModalContainer";
import BooksContainer from "./containers/BooksContainer/BooksContainer";
import BookModal from "./components/BookModal/BookModal";
import searching from "./assets/searching.gif";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [currBook, setCurrBook] = useState(null);
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
          <BooksContainer>
            {searchTerm && (
              <BookLoader
                searchTerm={searchTerm}
                startIndex={startIndex}
                setCurrBook={setCurrBook}
              />
            )}
            {searchTerm && (
              <Pagination
                startIndex={startIndex}
                setStartIndex={setStartIndex}
              />
            )}
            {!searchTerm && (
              <div className="image-container">
                <img className="image-container-image" src={searching}></img>
                <h1 className="image-container-heading">
                  Search for a book...
                </h1>
              </div>
            )}
          </BooksContainer>
        </FlexBox>
      </MainContainer>
      {currBook && (
        <ModalContainer>
          <BookModal currBook={currBook} setCurrBook={setCurrBook} />
        </ModalContainer>
      )}
    </div>
  );
}

export default App;
