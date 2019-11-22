import React, { FC } from "react";
import "./header.css";

export interface HeaderProps {
  showingLocationName?: string;
}

const Header: FC<HeaderProps> = ({ showingLocationName = "" }) => (
  <header>
    <h1>
      iTeru<span>{showingLocationName}</span>
    </h1>
    <div id="hamburger-menu-button">＝</div>
  </header>
);

export default Header;
