import "./App.css";
import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row ">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
