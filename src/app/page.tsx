import "../style/main.scss";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="project-container">
      {/* <Header /> */}
      <Gallery />
      {/* <Footer /> */}
    </div>
  );
}
