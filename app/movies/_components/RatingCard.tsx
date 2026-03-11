"use client";
import { Button } from "@/components/ui/button";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import { toast } from "sonner";

function RatingCard({
  averageRate,
  devRate,
}: {
  averageRate: number;
  devRate: number;
}) {

  const session = true 
  const handleRateClick = () => {
    if (session === true) {
      toast.error("You must be logged in");
      return;
    }
  }

  return (
    <Card className="text-white bg-cardbg/50 shadow-lg border-bgdetails p-3 border-2 w-full">
      <CardHeader className="flex flex-col gap-2 items-center">
        <CardDescription className="flex text-sm text-secondtext gap-5">
          <p>
            Average: <span className="text-yellowcontrast">{averageRate}</span>
            /10
          </p>
          <p>
            Noah: <span className="text-orangecontrast">{devRate}</span>/10
          </p>
          <p>
            You:<span className="font-bold">??</span>/10
          </p>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center text-center gap-4">
        <Button
          className="hover:bg-cardbg hover:text-primarytext hover:border-primarytext cursor-pointer bg-secondtext py-2 px-10 text-lg text-primarybg"
          onClick={handleRateClick}
        >
          Rate
        </Button>
      </CardContent>
    </Card> 
  );
}

export default RatingCard;
