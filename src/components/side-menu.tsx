import React, { FC, useEffect } from "react";
import { LocationState } from "../reducers/locations-reducer";

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
      {locations.map((location: LocationState) => (
        <ul className="SideMenu-ul" key={location.locationId}>
          <li className="SideMenu-li">
            <a className="SideMenu-location" href={`/${location.locationId}`}>
              {location.locationName}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default SideMenu;
