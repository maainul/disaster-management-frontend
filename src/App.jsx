import "./App.css";
import Router from "./Router";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
