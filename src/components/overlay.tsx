import React, { FC } from "react";
import "./overlay.scss";

export interface OverlayProps {
  isOverlaying?: boolean;
}

const Overlay: FC<OverlayProps> = ({ isOverlaying = false }) => (
  <div className={`Overlay ${isOverlaying ? "-show" : "-hide"}`} />
);

export default Overlay;
