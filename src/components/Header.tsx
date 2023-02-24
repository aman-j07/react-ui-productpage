import newCollection from "../assets/images/new-collection.png";
import spencersLogo from "../assets/logos/spencers-logo.png";
import {
  HeadsetMic,
  PinDropOutlined,
  FavoriteBorder,
  ShoppingBagOutlined,
  PersonOutline,
  Menu,
  CloseOutlined,
} from "@mui/icons-material";
import { useRef } from "react";
import SearchBar from "./SearchBar";

function Header() {
  const refSideBar = useRef<null | HTMLElement>(null);
  return (
    <header className="header">
      <div className="header__offer vsmtext">
        20% Off! Code: SPRING21 - Terms apply*
      </div>
      <div className="header__navgrp column">
        <nav className="header__navbar row--centeraligned">
          <button
            onClick={() => {
              refSideBar.current!.classList.add("header__sidebar--open");
            }}
            className="header__toggler btn--transparent"
          >
            <Menu fontSize="large" />
          </button>
          <a href="#home">
            <img
              className="header__logo"
              src={spencersLogo}
              alt="spencers logo"
            />
          </a>
          <div className="header__listgrp row--centeraligned">
            <ul className="header__navlist header__navlist--lggap header__navlist--sidebar row--centeraligned vsmtext">
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
        <SearchBar sidebar={true} />
        <nav className="header__navbar header__navbar--underlined header__navbar--sidebar row--centeraligned">
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
        <nav className="header__navbar header__navbar--sidebar row--centeraligned">
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
          <SearchBar />
        </nav>
      </div>
      <section className="header__hero">
        <img
          className="hero__banner"
          src={newCollection}
          alt="new-collection pic"
        />
      </section>
      <aside ref={refSideBar} className="header__sidebar">
        <div className="sidebar__content">
          <button
            onClick={() => {
              refSideBar.current!.classList.remove("header__sidebar--open");
            }}
            className="sidebar__toggler btn--transparent"
          >
            <CloseOutlined fontSize="large" />
          </button>
          
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
          <ul className="header__navlist header__navlist--lggap header__navlist--sidebar row--centeraligned vsmtext">
            <li className="header__navlink row--centeraligned">
              <HeadsetMic />
              <span>Support</span>
            </li>
            <li className="header__navlink row--centeraligned">
              <PinDropOutlined />
              <span>Find a store</span>
            </li>
          </ul>
        </div>
      </aside>
    </header>
  );
}

export default Header;
