import "./App.scss";
import Header from "./components/header";

import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="main">
      <Sidebar />

      <div className="main__container">
        <Header />
      </div>
    </div>
  );
}

export default App;
