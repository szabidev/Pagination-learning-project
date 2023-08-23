import { Roboto } from "next/font/google";
import "./home.scss";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const HomePage = () => {
  return (
    <div className={`${roboto.className} homepage`}>
      <div className="homepage__description page__content">
        <p>
          Discover the world of captivating visuals with ImageSearchX, a
          cutting-edge personal project crafted with love using ReactJS. Immerse
          yourself in a vast repository of stunning images, where you can
          search, explore, and indulge in a seamless browsing experience like
          never before.
        </p>
        <p>
          Unleash your creativity and curiosity as you embark on a journey
          through an extensive collection of diverse images. Whether you&apos;re
          seeking breathtaking landscapes, awe-inspiring architecture, adorable
          animals, or artistic masterpieces, ImageSearchX has it all.
        </p>
        <p>
          Our user-friendly interface allows you to effortlessly navigate
          through the digital art gallery, designed to cater to your preferences
          and offer an intuitive search mechanism. Simply enter your desired
          keywords, and let ImageSearchX deliver an array of mesmerizing images
          at your fingertips.
        </p>
        <p>
          Embark on an adventure of visual delight and let your imagination soar
          with ImageSearchX. Whether you&apos;re a photography enthusiast, a
          designer, or simply someone who appreciates the beauty of images, this
          platform is tailor-made for you.
        </p>
        <p>
          So, what are you waiting for? Start your exploration now with
          ImageSearchX and let the magic of images captivate your senses!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
