import { Badge } from "@/components/ui/badge";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";

interface MovieDisplay {
  id: number;
  title: string;
  releaseYear: number;
  director: string;
  runTimeMin: number;
  averageRate: number;
  voteAmount: number;
  genres: string[];
  description: string;
  image: string;
}

function MovieCard({ movie }: { movie: MovieDisplay }) {
  return (
    <Card className="text-white bg-cardbg/60 shadow-lg border-bgdetails p-3 border-2 w-1/2">
      <CardHeader className="flex flex-col items-center text-center gap-2">
        <CardTitle className="text-2xl p-1">{movie.title}</CardTitle>

        <CardDescription className="text-sm text-secondtext">
          {movie.releaseYear} • {movie.director} • {movie.runTimeMin} min
        </CardDescription>

        <img
          src={movie.image}
          alt={`${movie.title} poster`}
          className="w-5/6 rounded-md"
        />
      </CardHeader>

      <CardContent className="flex flex-col items-center text-center gap-4">
        <ul className="flex flex-wrap justify-center gap-4">
          {movie.genres.map((genre, index) => (
            <li key={index}>
              <Badge
                variant="outline"
                className="p-3 text-md text-secondtext border-yellowcontrast"
              >
                {genre}
              </Badge>
            </li>
          ))}
        </ul>
        <p className="text-lg w-full leading-relaxed">{movie.description}</p>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
