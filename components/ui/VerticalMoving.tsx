import { InfiniteMovingCards } from "./GoingUp";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[90%] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="up"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "it was the worst",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "that is the question:",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "seem is but wi.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "acknowledged, .",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "would sail about .",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
