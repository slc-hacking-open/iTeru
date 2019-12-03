import React, { FC } from "react";

import Room, { RoomProps } from "./room";
import "./rooms.css";

export interface RoomsProps {
  rooms?: Array<RoomProps>;
}

const Rooms: FC<RoomsProps> = ({ rooms = [] }) => (
  <article className="rooms">
    {rooms.map((room: RoomProps) => {
      return (
        <Room
          key={room.roomId}
          roomName={room.roomName}
          elapsedMinutes={room.elapsedMinutes}
          isUsing={room.isUsing}
        />
      );
    })}
  </article>
);

export default Rooms;
