import Delimiter from "../ui/Delimiter";
import SectionLabel from "../ui/SectionLabel";
import Carousel from "../ui/Carousel";

const imageNames = [
    'OG.png', 
    'barber-outside.png',
    'products.png'
]

export default function PremiumExperience() {
  return (<section className="mt-20 flex gap-3">

    <div className="w-5/12 flex flex-col">

      <SectionLabel labelText={"Premium Experience"} />
      <Delimiter />
      <p className="font-body text-body leading-[25px] text-text-primary">
        Located in the heart of Ioannina city, steps away from the historic lake, you can find your favourite barber ready to offer you an experience like no other. At Ferdinandos Barbershop, we believe that a great haircut is more than just a service — it is a ritual. From the moment you walk through our doors, you are welcomed into a space where craftsmanship, attention to detail, and passion for the craft come together. Whether you are here for a sharp haircut, a beard trim, or a classic shave, every visit is tailored to you.</p>
    </div>

    <div className="w-7/12">
      <Carousel imageNames={imageNames} />
    </div>
  </section>);
}
