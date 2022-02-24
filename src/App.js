import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return <MainPage />;
}

export default App;
