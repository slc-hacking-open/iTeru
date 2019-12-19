import React, { FC, useEffect } from "react";

import { RoomState } from "../reducers/rooms-reducer";
import Room, { RoomProps } from "./room";
import "./rooms.scss";

export interface RoomsProps {
  rooms?: RoomState[];
  getRooms?: () => void;
}

const Rooms: FC<RoomsProps> = ({ rooms = [], getRooms = () => {} }) => {
  useEffect(() => {
    getRooms();
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
