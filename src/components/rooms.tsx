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

  // 使用中の部屋は下に表示する
  const sorted = rooms.slice().sort((a, b) => {
    if (a.isUsing && !b.isUsing) return 1;
    if (!a.isUsing && b.isUsing) return -1;

    return 0;
  });

  return (
    <div className="Rooms">
      {sorted.map((room: RoomProps) => {
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
