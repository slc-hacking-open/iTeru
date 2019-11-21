import React from "react";

import Header from "./containers/header";
import SideMenu from "./containers/side-menu";
import Tile from "./components/tile";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <SideMenu />
      <Tile roomName="A12" elapsedMinutes={30} />
    </div>
  );
};

export default App;
