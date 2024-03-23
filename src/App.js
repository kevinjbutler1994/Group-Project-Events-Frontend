import "./App.css";
import { useState, useEffect } from "react";
import { verify } from "./services/users.js";

import Menu from "./components/menu/Menu.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/homePage/HomePage.jsx";
import SearchPage from "./screens/searchPage/SearchPage.jsx";
import FavoritePage from "./screens/favoritePage/FavoritePage.jsx";
import LoginPage from "./screens/loginPage/LoginPage.jsx";
import ProfilePage from "./screens/profilePage/ProfilePage.jsx";
import EventPage from "./screens/eventPage/EventPage.jsx";
import HelpPage from "./screens/helpPage/HelpPage.jsx";
import SignUpPage from "./screens/signUpPage/signUpPage.jsx";
import EditProfilePage from "./screens/editProfilePage/EditProfilePage.jsx";
import { getEvents } from "./services/events.js";
import { getFavorites } from "./services/favorites.js";
// import EventPage from './screens/eventPage/EventPage.jsx';

function App() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([])
  const [favorites, setFavorites] = useState([]);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify();
      user ? setUser(user) : setUser(null);
    };
    const getAllEvents = async () => {
      const response = await getEvents()
      setEvents(response)
    }
    const fetchFavorites = async () => {
      const pullFavorites = await getFavorites();
      setFavorites(pullFavorites);
    };

    fetchUser()
    getAllEvents()
    fetchFavorites()
  }, [toggle]);


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage user={user} events={events} favorites={favorites} setToggle={setToggle}/>} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorite" element={<FavoritePage user={user} favorites={favorites} setToggle={setToggle}/>} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route
          path="/profile"
          element={<ProfilePage user={user} setUser={setUser} />}
        />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="/help" element={<HelpPage user={user}/>} />
        <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
        <Route path="/edit" element={<EditProfilePage setUser={setUser} />} />
      </Routes>

      <Menu />
    </div>
  );
}

export default App;
