import React, { FC } from "react";

import "./room.css";

export interface RoomProps {
  roomId?: number;
  roomName?: string;
  isUsing?: boolean;
  elapsedMinutes?: number;
}

const Room: FC<RoomProps> = ({
  roomName = "",
  isUsing = true,
  elapsedMinutes = 0
}) => {
  // elapsedMinutes allows more than 61 minutes.
  const hours: number =
    elapsedMinutes > 0 ? Math.floor(elapsedMinutes / 60) : 0;
  const minutes: number = elapsedMinutes > 0 ? elapsedMinutes % 60 : 0;

  return (
    <section className={`room ${isUsing ? "room-close" : "room-open"}`}>
      <h1 className="room-roomName">{roomName}</h1>
      <p className="room-elapsedMinutes">
        {isUsing ? "" : `${hours}:${minutes}`}
      </p>
    </section>
  );
};

export default Room;
