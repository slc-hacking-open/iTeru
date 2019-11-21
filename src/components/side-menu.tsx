import React, { FC } from "react";

export interface SideMenuProps {
  locationNames?: Array<string>;
}

const SideMenu: FC<SideMenuProps> = ({ locationNames = [] }) => (
  <div id="sideMenu">
    <div>x</div>
    {locationNames.map((locationName: string) => (
      <div>
        <p>{locationName}</p>
      </div>
    ))}
  </div>
);

export default SideMenu;
