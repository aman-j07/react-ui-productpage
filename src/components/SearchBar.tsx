import { MicNone, Search } from "@mui/icons-material";
import cameraLogo from "../assets/logos/Camera.png";

type PropTypes = { sidebar?: boolean };

function SearchBar(props: PropTypes) {
  return (
    <div
      className={`header__searchgrp ${
        props.sidebar ? "header__searchgrp--sidebar" : ""
      } row--centeraligned`}
    >
      <div className="searchgrp__searchbar row--centeraligned">
        <Search fontSize="small" />
        <input
          className="searchgrp__inp smtext"
          placeholder="Search products, articles, faq, ..."
          type="text"
        />
      </div>
      <div className="searchgrp__options row--centeraligned">
        <MicNone fontSize="small" />
        <img src={cameraLogo} alt="camera icon" />
      </div>
    </div>
  );
}

export default SearchBar;
