import { AppContainer } from "./styles/base";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <AppContainer>
        <Header></Header>
        <MovieList></MovieList>
      </AppContainer>
      <Footer></Footer>
    </>
  );
};

export default App;
