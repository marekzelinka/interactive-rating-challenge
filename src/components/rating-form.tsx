import { ratings, type Rating } from "@/lib/types";
import { StarIcon } from "lucide-react";
import type { FormEvent } from "react";
import { toast } from "sonner";
import { Button, buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export function RatingForm({
  onSubmit,
}: {
  onSubmit: (rating: Rating) => void;
}) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const rating = formData.get("rating")?.toString();
    if (!rating) {
      toast.error("Please select number rating!");
      return;
    }

    onSubmit(rating as unknown as Rating);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <StarIcon className="size-6 fill-primary text-primary" />
        </div>
        <CardTitle id="rating-title" className="mt-6 text-xl">
          How did we do?
        </CardTitle>
        <CardDescription id="rating-description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <fieldset
              aria-labelledby="rating-title"
              aria-describedby="rating-description"
            >
              <RadioGroup name="rating" className="flex justify-between">
                {ratings.map((rating) => (
                  <Label
                    key={rating}
                    className={buttonVariants({
                      variant: "secondary",
                      size: "icon",
                      className:
                        "size-12 rounded-full has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground",
                    })}
                  >
                    <RadioGroupItem
                      id={rating}
                      value={rating}
                      className="sr-only"
                    />
                    {rating}
                  </Label>
                ))}
              </RadioGroup>
            </fieldset>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
