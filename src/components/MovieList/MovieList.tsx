import { useEffect, useRef, useState } from "react";
import MovieItem from "src/components/MovieItem/MovieItem";
import { getMovies } from "src/features/HomePage/store/homePageSlice";
import { useAppDispatch, useAppSelector } from "src/store/hook";

const MovieList = () => {
  const movieListRef = useRef(null);
  const { movieList, isLoading } = useAppSelector(
    (state) => state.HomePageSlice
  );
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  const handleFetchData = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        (movieListRef.current! as HTMLElement).offsetHeight &&
      page < 5
    ) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleFetchData);
    return () => window.removeEventListener("scroll", handleFetchData);
  }, []);

  useEffect(() => {
    dispatch(getMovies({ page, limit: 25, quality: "2160p" }));
  }, [dispatch, page]);

  return (
    <>
      {!isLoading && (
        <div
          ref={movieListRef}
          className="px-[30px] grid xxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[15px] gap-y-10"
        >
          {movieList?.length > 0 &&
            movieList?.map((movie, index) => (
              <MovieItem key={index} movie={movie} />
            ))}
          {!movieList?.length && (
            <div className="text-lg text-secondary font-medium">
              Film not found !
            </div>
          )}
        </div>
      )}
      {isLoading && (
        <div className="flex justify-center mb-5">
          <div className="w-10 h-10 rounded-full border-[4px] border-secondary border-t-white animate-spin"></div>
        </div>
      )}
    </>
  );
};

export default MovieList;
