import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <div id="svg-icons-container" style={{ display: "none" }}></div>
      {/* <!-- header --> */}
      <Header />
      {/* <!-- main --> */}
      <Main />
      {/* <!-- footer --> */}
      <Footer />
    </div>
  );
}

export default App;
