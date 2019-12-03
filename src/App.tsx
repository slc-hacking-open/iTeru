import React from "react";

import Header from "./containers/header";
import SideMenu from "./containers/side-menu";
import Rooms from "./components/rooms";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <SideMenu />
      <Rooms
        rooms={[
          {
            roomId: 0,
            roomName: "12A",
            elapsedMinutes: 10,
            isUsing: false
          },
          {
            roomId: 1,
            roomName: "12B",
            elapsedMinutes: 9,
            isUsing: true
          }
        ]}
      />
    </div>
  );
};

export default App;
