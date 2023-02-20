import newCollection from "../assets/images/new-collection.png";
import spencersLogo from "../assets/logos/spencers-logo.png";
import spencersLogoTransparent from "../assets/logos/spencers-logo-transparent.png";
import cameraLogo from "../assets/logos/Camera.png";
import spencersOffer from "../assets/images/spencers-offer.png";
import {
  HeadsetMic,
  PinDropOutlined,
  FavoriteBorder,
  ShoppingBagOutlined,
  Search,
  PersonOutline,
  Star,
  MicNone,
  ArrowForward,
} from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProductsPage() {
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
    ],
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: (
      <button className="productscarousal__nextarrow">
        <ArrowForward fontSize="small" />
      </button>
    ),
    variableWidth:true
  };

  return (
    <div className="productspage">
      <header className="header">
        <div className="header__offer vsmtext">
          20% Off! Code: SPRING21 - Terms apply*
        </div>
        <div className="header__navs column">
          <nav className="header__navbar row--centeraligned">
            <a href="#home">
              <img src={spencersLogo} alt="spencers logo" />
            </a>
            <div className="header__listgrp row--centeraligned">
              <ul className="header__navlist header__navlist--lggap row--centeraligned vsmtext">
                <li className="header__navlistitem row--centeraligned">
                  <HeadsetMic />
                  <span>Support</span>
                </li>
                <li className="header__navlistitem row--centeraligned">
                  <PinDropOutlined />
                  <span>Find a store</span>
                </li>
              </ul>
              <ul className="header__navlist header__navlist--smgap row--centeraligned">
                <li>
                  <FavoriteBorder />
                </li>
                <li>
                  <PersonOutline />
                </li>
                <li>
                  <ShoppingBagOutlined />
                </li>
              </ul>
            </div>
          </nav>
          <nav className="header__navbar header__navbar--underlined row--centeraligned">
            <ul className="header__navlist header__navlist--mdgap smtext row--centeraligned">
              <li>WOMEN</li>
              <li>MEN</li>
              <li>KIDS</li>
            </ul>
          </nav>
          <nav className="header__navbar row--centeraligned">
            <ul className="header__navlist header__navlist--mdgap vsmtext row--centeraligned">
              <li>SALE</li>
              <li>NEW IN</li>
              <li>CLOTHING</li>
              <li>SHOES</li>
              <li>ACCESSORIES</li>
              <li>BRANDS</li>
            </ul>
            <div className="header__searchgrp row--centeraligned">
              <Search fontSize="small" />
              <input
                className="searchgrp__inp smtext"
                placeholder="Search products, articles, faq, ..."
                type="text"
              />
              <div className="searchgrp__options row--centeraligned">
                <MicNone fontSize="small" />
                <img src={cameraLogo} alt="camera icon" />
              </div>
            </div>
          </nav>
        </div>
        <section className="header__hero">
          <img
            className="hero__banner"
            src={newCollection}
            alt="new-collection pic"
          />
        </section>
      </header>
      <main>
        <section className="productscarousal">
          <h4 className="productscarousal__head">TRENDING NOW</h4>
            <Slider {...settings}>
              {images.carousal.map((ele, i) => (
                <div className="card">
                  <div className="card__photoarea">
                    <span className="card__like"><FavoriteBorder/></span>
                    <span className="card__tags"><span className="card__tag card__tag--warning">-42% OFF</span></span>
                    <img className="card__photo" src={ele} alt={`trending-${i}`} />
                  </div>
                  <div className="card__body column">
                    <h6 className="card__label">BRAND/TYPE</h6>
                    <h5 className="card__title">Name and Characteristics</h5>
                    <div className="card__prices row--centeraligned">
                      <span className="smtext">74,95 €</span>
                      <span className="card__prices__oldprice vsmtext">
                        121,00 €
                      </span>
                    </div>
                    <div className="card__rating row--centeraligned">
                      <span>
                        {[1, 1, 1, 1, 1].map((ele) => (
                          <Star fontSize="inherit" />
                        ))}
                      </span>
                      <span>(45)</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
        </section>
        <section className="products">
          <h4 className="products__head">SPRING/SUMMER 2021</h4>
          <div className="row--centeraligned">
            {images.springSummer.map((ele, i) => (
              <div className="card">
                <div className="card__photoarea">
                  <span className="card__like"><FavoriteBorder/></span>
                  <span className="card__tags"><span className="card__tag card__tag--warning">-42% OFF</span>{i===0&&<span className="card__tag card__tag--success">ECO</span>}</span>
                  <img className="card__photo" src={ele} alt={`trending-${i}`} />
                </div>
                <div className="card__body column">
                  <h6 className="card__label">BRAND/TYPE</h6>
                  <h5 className="card__title">Name and Characteristics</h5>
                  <div className="card__prices row--centeraligned">
                    <span className="smtext">74,95 €</span>
                    <span className="card__prices__oldprice vsmtext">
                      121,00 €
                    </span>
                  </div>
                  <div className="card__rating row--centeraligned">
                    <span>
                      {[1, 1, 1, 1, 1].map((ele) => (
                        <Star fontSize="inherit" />
                      ))}
                    </span>
                    <span>(45)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="productscarousal">
          <h4 className="productscarousal__head">RECOMMENDED FOR YOU</h4>
          <Slider {...settings}>
            {images.carousal.map((ele, i) => (
              <div className="card">
                <div className="card__photoarea">
                  <span className="card__like"><FavoriteBorder/></span>
                  <span className="card__tags"><span className="card__tag card__tag--warning">-42% OFF</span></span>
                  <img className="card__photo" src={ele} alt={`trending-${i}`} />
                </div>
                <div className="card__body column">
                  <h6 className="card__label">BRAND/TYPE</h6>
                  <h5 className="card__title">Name and Characteristics</h5>
                  <div className="card__prices row--centeraligned">
                    <span className="smtext">74,95 €</span>
                    <span className="card__prices__oldprice vsmtext">
                      121,00 €
                    </span>
                  </div>
                  <div className="card__rating row--centeraligned">
                    <span>
                      {[1, 1, 1, 1, 1].map((ele) => (
                        <Star fontSize="inherit" />
                      ))}
                    </span>
                    <span>(45)</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
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
        <section className="productscarousal">
          <h4 className="productscarousal__head">NEW IN... ACCESSORIES</h4>
          <div>
            <Slider {...settings}>
              {images.carousal.map((ele, i) => (
                <div className="card">
                  <div className="card__photoarea">
                    <span className="card__like"><FavoriteBorder/></span>
                    <span className="card__tags"><span className="card__tag card__tag--warning">-42% OFF</span></span>
                    <img className="card__photo" src={ele} alt={`trending-${i}`} />
                  </div>
                  <div className="card__body column">
                    <h6 className="card__label">BRAND/TYPE</h6>
                    <h5 className="card__title">Name and Characteristics</h5>
                    <div className="card__prices row--centeraligned">
                      <span className="smtext">74,95 €</span>
                      <span className="card__prices__oldprice vsmtext">
                        121,00 €
                      </span>
                    </div>
                    <div className="card__rating row--centeraligned">
                      <span>
                        {[1, 1, 1, 1, 1].map((ele) => (
                          <Star fontSize="inherit" />
                        ))}
                      </span>
                      <span>(45)</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__top row--centeraligned">
          {[1, 2, 3, 4, 5].map((ele) => {
            return (
              <ul className="footer__lists">
                <li className="footer__listhead smtext">FOOTER{ele}</li>
                {[1, 2, 3].map((ele) => (
                  <li className="footer__listitem vsmtext">Item</li>
                ))}
              </ul>
            );
          })}
        </div>
        <div className="footer__bottom">
          <img src={spencersLogoTransparent} alt="spencers-logo-transparent" />
        </div>
      </footer>
    </div>
  );
}

export default ProductsPage;
