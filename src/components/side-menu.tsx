import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import "./side-menu.scss";

export interface SideMenuProps {
  locations?: string[];
  initMenu?: () => void;
  openMenu?: () => void;
  closeMenu?: () => void;
}

const SideMenu: FC<SideMenuProps> = ({
  locations = ["新宿", "清澄", "新大阪", "南港"],
  openMenu = () => {},
  closeMenu = () => {}
}) => {
  return (
    <div className="SideMenu">
      <ul className="SideMenu-ul">
        {locations.map((locationName: string) => (
          <li className="SideMenu-li" key={locationName}>
            <Link className="SideMenu-location" to={`/${locationName}`}>
              {locationName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
