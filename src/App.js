import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main.js";
import FirstVector from './assets/illustration/DecorativeLine.png'


function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
      <div style={{height: '200vh'}}></div>
    <div className="first-grad"></div>
    <div className="first-grad"></div>
    <img className="first-vector" src={FirstVector} alt="" />

    {/* <FirstVector />  */}
    </BrowserRouter>
    </>
  );
}

export default App;
