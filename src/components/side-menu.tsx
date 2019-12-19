import React, { FC, useEffect } from "react";
import { LocationState } from "../reducers/locations-reducer";
import "./side-menu.scss";

export interface SideMenuProps {
  locations?: LocationState[];
  initMenu?: () => void;
  openMenu?: () => void;
  closeMenu?: () => void;
}

const SideMenu: FC<SideMenuProps> = ({
  locations = [],
  initMenu = () => {},
  openMenu = () => {},
  closeMenu = () => {}
}) => {
  // When state [] is updated, run initMenu(); Only 1 time.
  useEffect(() => {
    initMenu();
  }, []);

  return (
    <div className="SideMenu">
      <ul className="SideMenu-ul">
        {locations.map((location: LocationState) => (
          <li className="SideMenu-li" key={location.locationId}>
            <a className="SideMenu-location" href={`/${location.locationId}`}>
              {location.locationName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
