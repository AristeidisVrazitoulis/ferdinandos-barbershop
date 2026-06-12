export default function ReviewCard({ name, text, stars }) {
  return (
    <div className="flex-1 p-8 bg-surface rounded">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <img key={i} src="/images/star-rating.svg" alt="" className="w-4 h-4" />
        ))}
      </div>
      <p className="text-text-secondary italic mb-6">&ldquo;{text}&rdquo;</p>
      <p className="font-semibold text-text-primary">{name}</p>
    </div>
  );
}
