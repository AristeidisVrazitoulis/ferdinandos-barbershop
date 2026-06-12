import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import { MapPin } from "lucide-react";
import { BOOKING_URL, GMAPS_LOCATION } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="mt-20 relative">
  <img src="/images/cta.png" alt="" className="w-full object-cover" />
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
    <SectionLabel labelText={"upgrade yourself now"} />
    <div className="flex gap-8 mt-10">
      <Button href={BOOKING_URL} variant="primary">
        Book Now
      </Button>
      <Button href={GMAPS_LOCATION} variant="ghost" className="flex items-center gap-2">
        <MapPin size={18} />
        Get Directions
      </Button>
    </div>
  </div>
</section>
  );
}
