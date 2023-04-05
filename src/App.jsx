import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NetflixNav from "./components/NetflixNav";
import MainContent from "./components/MainContent";
import NetflixFooter from "./components/NetflixFooter";
import AccountPage from "./components/AccountPage";
import SettingsPage from "./components/settingsPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <NetflixNav />

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <NetflixFooter />
      </BrowserRouter>
    </main>
  );
}

export default App;
