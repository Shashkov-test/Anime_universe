import React from "react";

import { Twitter, Instagram, Telegram, Facebook } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = ({ setSelectedAnimeType }) => {
  return (
    <div className="header">
      <Link style={{ textDecoration: "none" /* , color: "#ffffff" */ }} to="/">
        <h1
          style={{ cursor: "pointer" }}
          onClick={() => setSelectedAnimeType("most-popular")}
        >
          Anime Universe
        </h1>
      </Link>

      <div className="header__social">
        <a href="https://twitter.com/">
          <Twitter />
        </a>

        <a href="https://www.instagram.com/">
          <Instagram />
        </a>

        <a href="https://www.facebook.com/">
          <Facebook />
        </a>

        <a href="https://telegram.org/">
          <Telegram />
        </a>
      </div>
    </div>
  );
};

export default Header;
