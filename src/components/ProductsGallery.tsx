import { ArrowForward, FavoriteBorder, Star } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type PropTypes = {
  title: string;
  sliding?: boolean;
  images: string[];
};

function ProductsGallery(props: PropTypes) {
  // an object for providing necessary props for react-slick slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide:true,
    nextArrow: (
      <button className="productscarousal__nextarrow">
        <ArrowForward fontSize="small" />
      </button>
    ),
    variableWidth: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const settingsOther = {...settings,responsive:[],arrows:false};

  const products = props.images.map((ele) => (
    <div key={ele} className="card">
      <div className="card__photoarea">
        <span className="card__like">
          <FavoriteBorder />
        </span>
        <span className="card__tags">
          <span className="card__tag card__tag--warning">-42% OFF</span>
        </span>
        <img className="card__photo" src={ele} alt="product pic" />
      </div>
      <div className="card__body column">
        <h6 className="card__label">BRAND/TYPE</h6>
        <h5 className="card__title">Name and Characteristics</h5>
        <div className="card__prices row--centeraligned">
          <span className="smtext">74,95 €</span>
          <span className="card__prices__oldprice vsmtext">121,00 €</span>
        </div>
        <div className="card__rating row--centeraligned">
          <span>
            {[1, 2, 3, 4, 5].map((ele) => (
              <Star key={ele} fontSize="inherit" />
            ))}
          </span>
          <span>(45)</span>
        </div>
      </div>
    </div>
  ));

  return (
    <section
      className={`productsgallery ${
        props.sliding === false ? "productsgallery--static" : ""
      }`}
    >
      <h4 className="productsgallery__head">{props.title}</h4>
      {props.sliding === undefined || false ? (
        <Slider {...settings}>{products}</Slider>
      ) : (
        <Slider {...settingsOther}>{products}</Slider>
      )}
    </section>
  );
}

export default ProductsGallery;
