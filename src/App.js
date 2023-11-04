import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";


function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
