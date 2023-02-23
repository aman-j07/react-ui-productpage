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
  Menu,
} from "@mui/icons-material";
import { useRef } from "react";

function Header() {
  const refToggleNav = useRef<null | HTMLDivElement>(null);
  return (
    <header className="header">
      <div className="header__offer vsmtext">
        20% Off! Code: SPRING21 - Terms apply*
      </div>
      <div className="header__navgrp column" ref={refToggleNav}>
        <nav className="header__navbar row--centeraligned">
          <a href="#home">
            <img src={spencersLogo} alt="spencers logo" />
          </a>
          <button
            onClick={() => {
              refToggleNav.current!.classList.toggle("header__navgrp--open");
            }}
            className="header__toggler btn--transparent"
          >
            <Menu fontSize="large" />
          </button>
          <div className="header__listgrp row--centeraligned">
            <ul className="header__navlist header__navlist--lggap row--centeraligned vsmtext">
              <li className="header__navlink row--centeraligned">
                <HeadsetMic />
                <span>Support</span>
              </li>
              <li className="header__navlink row--centeraligned">
                <PinDropOutlined />
                <span>Find a store</span>
              </li>
            </ul>
            <ul className="header__navlist header__navlist--smgap row--centeraligned">
              <li className="header__navlink">
                <a href="#wishlist">
                  <FavoriteBorder />
                </a>
              </li>
              <li className="header__navlink">
                <a href="#account">
                  <PersonOutline />
                </a>
              </li>
              <li className="header__navlink">
                <a href="#bag">
                  <ShoppingBagOutlined />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="header__navbar header__navbar--underlined row--centeraligned">
          <ul className="header__navlist header__navlist--mdgap smtext row--centeraligned">
            <li className="header__navlink">
              <a href="WOMEN">WOMEN</a>
            </li>
            <li className="header__navlink">
              <a href="MEN">MEN</a>
            </li>
            <li className="header__navlink">
              <a href="KIDS">KIDS</a>
            </li>
          </ul>
        </nav>
        <nav className="header__navbar row--centeraligned">
          <ul className="header__navlist header__navlist--mdgap vsmtext row--centeraligned">
            <li className="header__navlink">
              <a href="#SALE">SALE</a>
            </li>
            <li className="header__navlink">
              <a href="#NEW">NEW IN</a>
            </li>
            <li className="header__navlink">
              <a href="#CLOTHING">CLOTHING</a>
            </li>
            <li className="header__navlink">
              <a href="#SHOES">SHOES</a>
            </li>
            <li className="header__navlink">
              <a href="#ACCESSORIES">ACCESSORIES</a>
            </li>
            <li className="header__navlink">
              <a href="#BRANDS">BRANDS</a>
            </li>
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
  );
}

export default Header;
