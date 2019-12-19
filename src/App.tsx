import React from "react";

import Header from "./containers/header";
import SideMenu from "./containers/side-menu";
import Rooms from "./containers/rooms";
import Message from "./containers/message";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Message />
      <SideMenu />
      <Rooms />
    </div>
  );
};

export default App;
