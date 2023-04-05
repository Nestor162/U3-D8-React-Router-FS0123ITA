import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NetflixNav from "./components/NetflixNav";
import MainContent from "./components/MainContent";
import NetflixFooter from "./components/NetflixFooter";
import AccountPage from "./components/AccountPage";
import SettingsPage from "./components/SettingsPage";
import NotFound from "./components/NotFound";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <NetflixNav />

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <NetflixFooter />
      </BrowserRouter>
    </main>
  );
}

export default App;
