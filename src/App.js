import SpotifyLandingPage from "./components/SpotifyLandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="m-0 main-bg">
      <div className="mobile-view-message text-center">
        <div className="m-2 mb-3">
          <FontAwesomeIcon icon={faSpotify} size="2x" /> <br />{" "}
          <span className="mx-2 fs-2">Spotify Clone</span>
        </div>

        <div className="text-center text-white">
          Please view this website on a computer or a tablet with a larger
          screen for the best experience.
        </div>
      </div>

      <div className="main-content">
        <SpotifyLandingPage />
      </div>
    </div>
  );
}

export default App;
