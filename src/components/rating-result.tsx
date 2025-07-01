import type { Rating } from "@/lib/types";
import thankYouImage from "../assets/illustration-thank-you.svg";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";

export function RatingResult({ selectedRating }: { selectedRating: Rating }) {
  return (
    <Card>
      <CardHeader className="justify-center gap-6 pt-6 text-center">
        <img src={thankYouImage} alt="" className="h-24 w-auto" />
        <Badge
          variant="secondary"
          className="rounded-full px-6 py-2 text-sm text-primary"
        >
          You selected {selectedRating} out of 5
        </Badge>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mt-6 text-xl leading-none font-semibold">
          Thank you!
        </div>
        <div className="mt-1.5 text-sm text-pretty text-muted-foreground">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don&apos;t hesitate to get in touch!
        </div>
      </CardContent>
    </Card>
  );
}
