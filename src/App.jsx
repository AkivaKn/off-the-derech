import "./App.css";
import DesktopFooter from "./components/DesktopFooter";
import DesktopNavbar from "./components/DesktopNavbar";

function App() {
  return <div className={`flex min-h-screen w-screen flex-col justify-between`}>
    <DesktopNavbar />
    <DesktopFooter/>
  </div>;
}

export default App;
