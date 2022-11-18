import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Grids from "./components/Grids";

function App() {
  const [minimized, setMinimized] = useState(false);

  function handleMinimize() {
    setMinimized((minimized) => !minimized);
  }

  return (
    <>
      <div className="flex">
        <div className="sidebar-container">
          <Sidebar minimized={minimized} />
        </div>
        <div className="main-container">
          <header className="flex items-center gap-8 header-container">
            <Header handleMinimize={handleMinimize} />
          </header>
          <div className="grids-container m-8">
            <Grids />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
