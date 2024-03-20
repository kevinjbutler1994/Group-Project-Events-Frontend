import './App.css';
import Menu from './components/menu/Menu.jsx';
import {Routes, Route} from "react-router-dom";
import HomePage from "./screens/homePage/HomePage.jsx";
import SearchPage from './screens/searchPage/SearchPage.jsx';
import FavoritePage from './screens/favoritePage/FavoritePage.jsx';
import LoginPage from './screens/loginPage/LoginPage.jsx';
import ProfilePage from './screens/profilePage/ProfilePage.jsx';
import EventPage from './screens/eventPage/EventPage.jsx';
import HelpPage from './screens/helpPage/HelpPage.jsx';
import NavBar from './components/navBar/NavBar.jsx';
import SignUpPage from './screens/signUpPage/signUpPage.jsx';
import EditProfilePage from './screens/editProfilePage/EditProfilePage.jsx';
import MultiFilters from './components/filters/Multifilters.jsx';

// import EventPage from './screens/eventPage/EventPage.jsx';

function App() {
  return (
    <div className="app">
      <NavBar />
      {/* <EventPage /> */}
 
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/edit" element={<EditProfilePage />} />
   
  
       </Routes>

      <Menu />
    </div>
  );
}

export default App;
