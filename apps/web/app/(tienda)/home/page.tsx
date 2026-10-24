import { Categories } from "../../common/Categories";
import { Best_sellers } from "../../common/Best_sellers"
import { Reviews } from "../../common/Reviews"
import { Header } from "../../common/Header";

export default function Home() {
  return (
    <>
      <div className="w-full h-full mx-auto">
        {/* Header */}
        <Header />

        {/* Categories */}
        <Categories />

        {/* Best sellers */}
        <Best_sellers />

        {/* Reviews */}
        <Reviews />
      </div>
    </>
  );
}
