import Carousel from "src/components/Carousel/Carousel";
import Filter from "src/components/Filter/Filter";
import Footer from "src/components/Footer/Footer";
import Header from "src/components/Header/Header";
import MovieList from "src/components/MovieList/MovieList";
import Tutorial from "src/components/Tutorial/Tutorial";
import MovieDetail from "src/features/MovieDetail/MovieDetail";
import { useAppSelector } from "src/store/hook";

const HomePage = () => {
  const { open, isShowing } = useAppSelector((state) => state.HomePageSlice);
  return (
    <div className={`${isShowing ? "h-screen overflow-y-hidden" : "h-auto"}`}>
      <Header />
      <Carousel />
      <Filter />
      <MovieList />
      <Tutorial />
      <Footer />
      {open && <MovieDetail />}
    </div>
  );
};

export default HomePage;
