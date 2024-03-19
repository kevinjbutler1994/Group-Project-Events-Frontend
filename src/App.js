import './App.css';
import Menu from './components/menu/Menu.jsx';
import {Routes, Route} from "react-router-dom";
import HomePage from "./screens/homePage/HomePage.jsx";
import NavBar from './components/navBar/NavBar.jsx';
import EventPage from './screens/eventPage/EventPage.jsx';

function App() {
  return (
    <div className="app">
      <NavBar />
      <EventPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Menu />
    </div>
  );
}

export default App;
