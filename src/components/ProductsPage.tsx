import spencersOffer from "../assets/images/spencers-offer.png";
import { ArrowForward } from "@mui/icons-material";
import ProductsGallery from "./ProductsGallery";
import Header from "./Header";
import Footer from "./Footer";

function ProductsPage() {
  // array of images for carousal and products group
  const images = {
    carousal: [
      require("../assets/images/carousal/trending-1.png"),
      require("../assets/images/carousal/trending-2.png"),
      require("../assets/images/carousal/trending-3.png"),
      require("../assets/images/carousal/trending-4.png"),
      require("../assets/images/carousal/trending-5.png"),
      require("../assets/images/carousal/trending-6.png"),
    ],
    springSummer: [
      require("../assets//images/spring-summer/spring-summer-1.png"),
      require("../assets//images/spring-summer/spring-summer-2.png"),
      require("../assets//images/spring-summer/spring-summer-3.png"),
      require("../assets//images/spring-summer/spring-summer-4.png"),
    ],
  };

  return (
    <div className="container">
      <Header />
      <main>
        <ProductsGallery title="Trending Now" images={images.carousal} />
        <ProductsGallery
          title="Spring/Summer 2021"
          sliding={false}
          images={images.springSummer}
        />
        <ProductsGallery title="Recommended for you" images={images.carousal} />
        <section className="offer">
          <div className="offer__details__parent">
            <div className="offer__details">
              <h3 className="offer__details__title">It’s all about you</h3>
              <p>
                Try now, pay later. We want that you’re really confident and
                happy with your purchase - you have 30 days before we charge
                you! Learn more about our policy.
              </p>
              <button className="offer__btn">
                <ArrowForward />
              </button>
            </div>
          </div>
          <img
            className="offer__banner"
            src={spencersOffer}
            alt="spencers-offer"
          />
        </section>
        <ProductsGallery
          title="New in... Accessories"
          images={images.carousal}
        />
      </main>
      <Footer />
    </div>
  );
}

export default ProductsPage;
