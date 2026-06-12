import Link from "next/link";

export default function NavItem({ label }) {
  return (
    <li>
      <Link
        href={`#${label.toLowerCase()}`}
        className="font-body text-body text-text-secondary hover:text-brand transition-colors duration-200"
      >
        {label}
      </Link>
    </li>
  );
}
