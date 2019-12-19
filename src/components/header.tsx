import React, { FC } from "react";
import "./header.scss";

export interface HeaderProps {
  showingLocationName?: string;
}

const Header: FC<HeaderProps> = ({ showingLocationName = "" }) => (
  <header className="Header">
    <h1>
      iTeru<span>{showingLocationName}</span>
    </h1>
  </header>
);

export default Header;
