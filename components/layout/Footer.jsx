import Container from "../ui/Container";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { INSTAGRAM_URL, FACEBOOK_URL, YOUTUBE_URL} from "@/lib/constants";


export default function Footer() {
  return <footer className="bg-surface mt-20 p-10">
    <Container>
    <div className="flex justify-between px-25">
      <div className="flex flex-col">
        <p className="text-body font-bold mb-5">Address</p>
        <p className="text-caption ">Ferdinandos Barbershop</p>
        <p className="text-caption ">Metsovou 12</p>
        <p className="text-caption ">Ioannina, 45332, Greece</p>
      </div>
      <div className="flex flex-col">
        <p className="text-body font-bold mb-5">Contact</p>

        <div className="flex gap-2 mb-2">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={14} className="text-text-primary hover:text-brand transition-colors" />
        </a>
        <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={14} className="text-text-primary hover:text-brand transition-colors" />
        </a>
        <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
            <FaYoutube size={14} className="text-text-primary hover:text-brand transition-colors" />
        </a>
        </div>
        <p className="text-caption">+30 2651507383</p>
      </div>
    </div>
    <p className="text-center text-caption text-text-secondary mt-10">
      &copy; {new Date().getFullYear()} Ferdinando&apos;s Barbershop. All rights reserved.
    </p>
    </Container>
  </footer>;
}
