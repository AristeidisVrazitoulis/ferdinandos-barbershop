"use client";
import Container from "../ui/Container";
import NavItem from "../ui/NavItem";

import { useState } from "react";

const leftLinks  = ['Home', 'Discover']
const rightLinks = ['Contact', 'EN']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  return (
    <nav className={`
      absolute top-0 left-0 right-0 z-50
      transition-all duration-300
      ${scrolled ? 'bg-background/90 backdrop-blur-sm' : 'bg-transparent'}
    `}>
      <Container>
        <ul className="flex justify-between items-center">
          {leftLinks.map(item => <NavItem key={item} label={item} />)}

          <li>
            <a href="#home">
              <img
                src="/images/logo.png"
                alt="Ferdinandos Barbershop"
                className="w-auto"
              />
            </a>
          </li>

          {rightLinks.map(item => <NavItem key={item} label={item} />)}
        </ul>
      </Container>
    </nav>
  );
}
