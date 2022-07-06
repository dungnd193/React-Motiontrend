import LabelTz from "src/assets/image/label-tz.png";
import LikeIcon from "src/assets/image/like-icon.png";
import ViewIcon from "src/assets/image/view-icon.png";
import {
  setCurrentMovie,
  setIsShowing,
  setOpen,
} from "src/features/HomePage/store/homePageSlice";
import { IMovie } from "src/features/HomePage/type/type";
import { useAppDispatch } from "src/store/hook";

const MovieItem = ({ movie }: { movie: IMovie }) => {
  const dispatch = useAppDispatch();
  const handleOpenMovieDetail = () => {
    dispatch(setIsShowing(true));
    dispatch(setOpen(true));
    dispatch(setCurrentMovie(movie));
  };

  return (
    <div onClick={handleOpenMovieDetail}>
      <div className="relative group overflow-hidden cursor-pointer">
        <img
          src={movie.large_cover_image}
          alt="thumbnail"
          className="group-hover:scale-125 transition duration-500 ease-linear"
        />
        <div className="group-hover:opacity-100 group-hover:visible opacity-0 invisible absolute bottom-0 bg-[#00000080] w-full h-full transition duration-500 ease-linear">
          <div className="absolute top-0 left-0 pl-[10px] group-hover:opacity-100 group-hover:visible opacity-0 invisible w-[30px] transition duration-500 ease-linear">
            <img src={LabelTz} alt="badge" className="w-full h-full" />
          </div>
          <div className="absolute bottom-0 flex items-center justify-between px-[14px] pb-4 w-full">
            <span className="movie-thumbnail-description text-left text-sm text-white font-medium max-w-[150px] w-full">
              {movie.description_full}
            </span>
            <span className="text-sm text-white font-medium">
              {Math.floor(movie.runtime / 60)}:{movie.runtime % 60}:00
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex items-center gap-x-1">
          <div className="w-4 h-4 rounded-full overflow-hidden flex-none">
            <img
              src={
                "https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"
              }
              alt="owner-avatar"
              className="w-full h-full"
            />
          </div>
          <h3 className="movie-title text-left text-xs text-secondary font-light">
            {movie.title}
          </h3>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1">
            <div className="w-4">
              <img src={LikeIcon} alt="like" className="w-full" />
            </div>
            <span className="text-xs text-[#333] font-light">18</span>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="w-4">
              <img src={ViewIcon} alt="view" className="w-full" />
            </div>
            <span className="text-xs text-[#333] font-light">18</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
