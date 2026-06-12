export default function ServiceCard({ image, title }) {
  const titleParts = title.split("&");
  return (
    <div
      style={{ backgroundImage: `url('/images/${image}')` }}
      className="group rounded flex-1 h-64 bg-cover bg-center relative overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0  group-hover:bg-black/55 transition-colors duration-300" />
      <p className="absolute inset-0 flex items-center justify-center font-display text-2xl uppercase text-center text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        {titleParts[0]}&amp;<br />{titleParts[1]}
      </p>
    </div>
  );
}
