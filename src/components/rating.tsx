import { StarIcon } from "lucide-react";
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

export function Rating() {
  return (
    <Card>
      <CardHeader className="">
        <div className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <StarIcon className="size-6 fill-current" />
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
        <div className="flex flex-col gap-6">
          <fieldset
            aria-labelledby="rating-title"
            aria-describedby="rating-description"
          >
            <RadioGroup defaultValue="starter" className="flex justify-between">
              {["1", "2", "3", "4", "5"].map((plan) => (
                <Label
                  className={buttonVariants({
                    variant: "outline",
                    size: "icon",
                    className:
                      "size-12 rounded-full has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground",
                  })}
                  key={plan}
                >
                  <RadioGroupItem value={plan} id={plan} className="sr-only" />
                  {plan}
                </Label>
              ))}
            </RadioGroup>
          </fieldset>
          <Button>Submit</Button>
        </div>
      </CardContent>
    </Card>
  );
}
