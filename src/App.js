import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PageFive from "./Components/PageFive/PageFive";
import PageFour from "./Components/PageFour/PageFour";
import PageOne from "./Components/PageOne/PageOne";
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
    </div>
  );
}

export default App;
