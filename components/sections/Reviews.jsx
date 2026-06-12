import SectionLabel from "../ui/SectionLabel";
import Delimiter from "../ui/Delimiter";
import ReviewCard from "../ui/ReviewCard";
import reviews from "@/lib/reviews.json";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";

export default function Reviews() {
  return (
    <section className="mt-20">
      <SectionLabel labelText={"Reviews"} />
      <Delimiter />
      <div className="flex flex-1 gap-6">
        {reviews.map(review => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-caption text-center opacity-60 hover:opacity-100 transition-opacity mt-5 block cursor-pointer"
      >
        Read all reviews on Google
      </a>
    </section>
  );
}
