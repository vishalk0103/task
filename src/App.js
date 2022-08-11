import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

import Agency from "./components/Agency";
import Sidebar from "./components/shared/Sidebar";

function App() {
  return (
    <div className="">
      <div className="d-flex">
        <Sidebar />
        <Agency />
      </div>
      <div></div>
    </div>
  );
}

export default App;
