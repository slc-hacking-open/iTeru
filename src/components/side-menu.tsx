import React, { FC } from "react";

export interface SideMenuProps {
  locationNames?: Array<string>;
  initMenu?: () => void;
  openMenu?: () => void;
  closeMenu?: () => void;
}

const SideMenu: FC<SideMenuProps> = ({
  locationNames = [],
  initMenu = () => {},
  openMenu = () => {},
  closeMenu = () => {}
}) => (
  <div id="side-menu">
    <button type="button" onClick={openMenu}>
      Open
    </button>
    <button type="button" onClick={closeMenu}>
      Close
    </button>
    <button type="button" onClick={initMenu}>
      INIT
    </button>
    {locationNames.map((locationName: string) => (
      <div>
        <p>{locationName}</p>
      </div>
    ))}
  </div>
);

export default SideMenu;
