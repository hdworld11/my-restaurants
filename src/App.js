import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { createMap} from "maplibre-gl-js-amplify";
import { drawPoints } from "maplibre-gl-js-amplify";
import "maplibre-gl/dist/maplibre-gl.css";
Amplify.configure(awsconfig);

async function initializeMap() {
  const map = await createMap({
      container: "map", // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
      center: [-122.483696, 37.833818],
      zoom: 11,
  })

  map.on("load", function () {
    drawPoints("mySourceName", // Arbitrary source name
        [
            {
              coordinates: [-122.483696, 37.833818],
              title: "Golden Gate Bridge",
              address: "A suspension bridge spanning the Golden Gate",
            },
            {
              coordinates: [- 122.4770, 37.8105],
            },
        ], // An array of coordinate data, an array of Feature data, or an array of [NamedLocations](https://github.com/aws-amplify/maplibre-gl-js-amplify/blob/main/src/types.ts#L8)
        map,
        {
            showCluster: true,
            unclusteredOptions: {
                showMarkerPopup: true,
            },
            clusterOptions: {
                showCount: true,
            },
        }
    );
});
}

initializeMap();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
