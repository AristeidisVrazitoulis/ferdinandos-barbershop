import Hero from "@/components/sections/Hero";
import PremiumExperience from "@/components/sections/PremiumExperience";
import Container from "@/components/ui/Container";
import Quote from "@/components/sections/Quote";
import Services from "@/components/sections/Services";
import Reviews from "@/components/sections/Reviews";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Container>
        <PremiumExperience />
        <Quote />
        <Services />
        <Reviews />
        <CTA />
      </Container>
      <Footer />
    </main>
  );
}
