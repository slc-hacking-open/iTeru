import React, { FC } from "react";

export interface TileProps {
  roomName?: string;
  isUsing?: boolean;
  elapsedMinutes?: number;
}

const Tile: FC<TileProps> = ({
  roomName = "",
  isUsing = true,
  elapsedMinutes = 0
}) => (
  <section>
    <h1>{roomName}</h1>
    <p>{elapsedMinutes}</p>
    <p>{isUsing}</p>
  </section>
);

export default Tile;
