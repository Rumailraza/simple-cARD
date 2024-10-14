import Image from "next/image";

import Header from "./Components/page";
import Midpart from "./Components/Midpart/page";
import Cards from "./Components/cards/page";
import Footer from "./Components/footer/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Midpart />
      <Cards />
      <Footer />
    </div>
  );
}
