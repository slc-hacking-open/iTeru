import React, { FC, useEffect } from "react";

import Room, { RoomProps } from "./room";
import "./rooms.scss";

export interface RoomsProps {
  rooms?: {
    roomId?: string;
    roomName?: string;
    isUsing?: boolean;
    elapsedMinutes?: number;
  }[];
  getRooms?: (locationName: string) => void;
}

const Rooms: FC<RoomsProps> = ({ rooms = [], getRooms = () => {} }) => {
  useEffect(() => {
    const path = decodeURI(window.location.pathname.replace("/", ""));
    getRooms(path);
  }, []);

  return (
    <div className="Rooms">
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
    </div>
  );
};

export default Rooms;
