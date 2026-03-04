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
    <Card className="text-white bg-slate-900">
      <CardHeader >
        <img src={movie.image} />
        <CardTitle>{movie.title}</CardTitle>
        <CardDescription>{`Release Date: ${movie.releaseYear}`}</CardDescription>
        <CardDescription>{`Run Time: ${movie.runTimeMin}`}</CardDescription>
      </CardHeader>
      <CardContent>{movie.description}</CardContent>
    </Card>
  );
}

export default MovieCard;
