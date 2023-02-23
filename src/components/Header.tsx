import newCollection from "../assets/images/new-collection.png";
import spencersLogo from "../assets/logos/spencers-logo.png";
import cameraLogo from "../assets/logos/Camera.png";
import {
  HeadsetMic,
  PinDropOutlined,
  FavoriteBorder,
  ShoppingBagOutlined,
  Search,
  PersonOutline,
  MicNone,
} from "@mui/icons-material";

function Header() {
  return (
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
  )
}

export default Header