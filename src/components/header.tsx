import React, { FC, useState } from "react";
import "./header.scss";
import "./hamburger.css";

export interface HeaderProps {
  showingLocationName?: string;
  openMenu?: () => void;
  closeMenu?: () => void;
}

const Header: FC<HeaderProps> = ({
  showingLocationName = "",
  openMenu = () => {},
  closeMenu = () => {}
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="Header">
      <h1>
        iTeru<span>{showingLocationName}</span>
      </h1>
      <div
        className={`menu-trigger ${isActive ? "active" : ""}`}
        onClick={() => {
          if (isActive) closeMenu();
          else openMenu();
          setIsActive(!isActive);
        }}
      >
        <span />
        <span />
        <span />
      </div>
    </header>
  );
};

export default Header;
