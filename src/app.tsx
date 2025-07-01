import { useState } from "react";
import { RatingForm } from "./components/rating-form";
import { RatingResult } from "./components/rating-result";
import type { Rating } from "./lib/types";

export function App() {
  const [selectedRating, setSelectedRating] = useState<Rating | null>(null);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        {selectedRating ? (
          <div className="animate-in fade-in-0 zoom-in-0">
            <RatingResult selectedRating={selectedRating} />
          </div>
        ) : (
          <RatingForm onSubmit={setSelectedRating} />
        )}
      </div>
    </div>
  );
}
