import { Quote } from "lucide-react";

import { Card } from "@/components/ui/card";
import type { Review } from "@/data/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg sm:p-7">
      <Quote className="h-8 w-8 text-zonnegeel transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-antraciet">
        {review.quote}
      </blockquote>
      <footer className="mt-6 border-t border-border pt-4">
        <p className="font-heading font-bold text-antraciet">{review.name}</p>
        <p className="text-sm text-muted-foreground">{review.company}</p>
      </footer>
    </Card>
  );
}
