import React, { FC } from "react";

export interface HeaderProps {
  showingLocationName?: string;
}

const Header: FC<HeaderProps> = ({ showingLocationName = "" }) => (
  <header>
    <h1>
      iTeru<span>{showingLocationName}</span>
    </h1>
    <div>＝</div>
  </header>
);

export default Header;
