import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

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
          <div className="flex items-center gap-8 header-container">
            <Header handleMinimize={handleMinimize} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
