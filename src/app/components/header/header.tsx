import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <ul className="header__container--list">
          <li className="list__item">
            <Link className="list__item--link" href="/home">
              Home
            </Link>
          </li>
          <li className="list__item">
            <Link className="list__item--link" href="#">
              Search
            </Link>
          </li>
          <li className="list__item">
            <Link className="list__item--link" href="#">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
