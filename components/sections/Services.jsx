import SectionLabel from "../ui/SectionLabel";
import Delimiter from "../ui/Delimiter";
import ServiceCard from "../ui/ServiceCard";

const images = ["discover-1.png", "discover-2.png", "discover-3.png"];
const titles = ["haircut & styling", "beard & grooming", "cleanse & refresh"]

export default function Services() {
  return (
    <section className="mt-20">
      <SectionLabel labelText={"Discover"} />
      <Delimiter />
      <div className="flex gap-6">
        {images.map((image, i) => (
          <ServiceCard key={image} image={image} title={titles[i]}/>
        ))}
      </div>
    </section>
  );
}
