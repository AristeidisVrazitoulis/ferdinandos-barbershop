import Button from "../ui/Button"
import { BOOKING_URL } from "@/lib/constants"
import Navbar from "../layout/Navbar"
export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
    >
      <Navbar />
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/ferdinandos-hero.png')" }}
      />


      {/* Top gradient scrim — improves navbar readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-20 px-4 mt-12">
        <h1 className="font-display font-bold text-h1 text-text-primary uppercase tracking-wide">
          It's More Than <br /> a Haircut
        </h1>
        <Button href={BOOKING_URL} variant="primary">
          Book Now
        </Button>
      </div>

    </section>
  )

}
