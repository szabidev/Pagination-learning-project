import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container--socials">
          <p className="contact">Contact:</p>
          <Link href="https://www.facebook.com/szabi.vojtek/" target="_blank">
            <Image
              src="svg/facebook.svg"
              alt="facebook icon"
              width={32}
              height={32}
              className="icons"
            />
          </Link>
          <Link href="https://www.instagram.com/szabi.vojtek/" target="_blank">
            <Image
              src="svg/instagram.svg"
              alt="instagram icon"
              width={32}
              height={32}
              className="icons"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/szabolcs-vojtek/"
            target="_blank"
          >
            <Image
              src="svg/linkedin.svg"
              alt="linkedin icon"
              width={32}
              height={32}
              className="icons"
            />
          </Link>
          <Link href="https://github.com/szabidev" target="_blank">
            <Image
              src="svg/github.svg"
              alt="github icon"
              width={32}
              height={32}
              className="icons"
            />
          </Link>
        </div>
        <div className="footer__container--copyright">
          <p className="copyright">&copy; Copyright 2023: Szabi Vojtek</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
