"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
  const currentRoute = usePathname();
  return (
    <div className="header">
      <Link href="/" className="logo">
        ImageSearchX
      </Link>
      <div className="header__container">
        <ul className="header__container--list">
          <li className="list__item">
            <Link
              className={`list__item--link ${
                currentRoute === "/" ? "active" : ""
              }`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="list__item">
            <Link
              className={`list__item--link ${
                currentRoute === "/gallery" ? "active" : ""
              }`}
              href="/gallery"
            >
              Search
            </Link>
          </li>
          <li className="list__item">
            <Link
              className={`list__item--link ${
                currentRoute === "/contact" ? "active" : ""
              }`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
