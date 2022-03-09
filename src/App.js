import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PageEight from "./Components/PageEight/PageEight";
import PageFive from "./Components/PageFive/PageFive";
import PageFour from "./Components/PageFour/PageFour";
import PageOne from "./Components/PageOne/PageOne";
import PageSeven from "./Components/PageSeven/PageSeven";
import PageSix from "./Components/PageSix/PageSix";
import PageThree from "./Components/PageThree/PageThree";
import PageTwo from "./Components/PageTwo/PageTwo";
function App() {
  return (
    <div>
      <Navbar />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
      <PageSeven />
      <PageEight />
    </div>
  );
}

export default App;
