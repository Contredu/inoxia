import { Categories } from "./common/Categories";
import { Navbar } from "./common/Navbar"
import { Best_sellers } from "./common/Best_sellers"
import { Reviews } from "./common/Reviews"
import { Footer } from "./common/Footer"
import { Header } from "./common/Header";

export default function Home() {
  return (
    <>
    <div className="w-full h-full mx-auto">
      {/* Navbar */}
      <Navbar/>
      
      {/* Header */}
      <Header/>

      {/* Categories */}
      <Categories/>

      {/* Best sellers */}
      <Best_sellers/>

      {/* Reviews */}
      <Reviews/>

      {/* Footer */}
      <Footer/>

    </div>
    </>
  );
}
