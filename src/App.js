import React from "react";
import "./App.css";
import Navbar from "./Navbar/navbar";
import Homepage from "./components/Homepage/homepage";
import Footer from "./Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
