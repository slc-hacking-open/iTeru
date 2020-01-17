import React, { FC } from "react";

import "./room.scss";

export interface RoomProps {
  roomId?: string;
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
    <div className={`Room ${isUsing ? "-close" : "-open"}`}>
      <h1 className="Room-roomName">{roomName}</h1>
      <p className="Room-elapsedTime">{isUsing ? "" : `${hours}:${minutes}`}</p>
    </div>
  );
};

export default Room;
