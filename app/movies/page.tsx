import MovieCard from "./_components/MovieCard";
import RatingCard from "./_components/RatingCard";
import { Button } from "@/components/ui/button";

async function MoviePage() {

  return (
    <div className="flex flex-row py-10  gap-20 mx-10" >
      <div className="w-3/5">
        {/* <MovieCard movie={chosenMovie} key={chosenMovie.id} />
      </div>

      <div className="flex flex-col w-1/3 gap-15 my-20 items-center">
        <RatingCard
          averageRate={chosenMovie.averageRate}
          devRate={chosenMovie.minimumAllowedRating}

          /> */}

        <Button className="p-7 text-lg cursor-pointer w-60">Show next movie</Button>
      </div>
    </div>
  );
}

export default MoviePage;
