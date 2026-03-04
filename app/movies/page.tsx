import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/data/mock-db.json";
import MovieCard from "./_components/MovieCard";

async function MoviePage() {
  const movies = await db.movies;

  return (
    <div className="flex flex-col gap-10 p-10 w-1/2">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MoviePage;
