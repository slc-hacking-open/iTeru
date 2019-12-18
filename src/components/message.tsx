import React, { FC } from "react";
import "./message.css";

export interface HeaderProps {
  message?: string;
  error?: boolean;
}

const Message: FC<HeaderProps> = ({ message = "", error = false }) => (
  <section
    className={`Message ${message ? "-open" : "-close"} ${
      error ? "-error" : ""
    }`}
  >
    <p>{message}</p>
  </section>
);

export default Message;
