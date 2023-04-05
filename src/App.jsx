import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NetflixNav from "./components/NetflixNav";
import MainContent from "./components/MainContent";
import NetflixFooter from "./components/NetflixFooter";
/* import AccountPage from "./components/AccountPage"; */
/* import SettingsPage from "./components/settingsPage"; */

function App() {
  return (
    <main className="App">
      <NetflixNav />
      <MainContent />
      {/*   <SettingsPage /> */}
      {/*       <AccountPage /> */}
      <NetflixFooter />
    </main>
  );
}

export default App;
