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
      center: [-73.98597609730648, 40.751874635721734],
      zoom: 11,
  })

  map.on("load", function () {
    drawPoints("mySourceName", // Arbitrary source name
        [
            {
              coordinates: [-73.98709247500821, 40.718839863699905],
              title: "My Restaurant - Lower East Side",
              address: "102 Norfolk St, New York, NY 10002",
            },
            {
              coordinates: [-73.9893305444102, 40.76329636720047],
              title: "My Restaurant - Hell's Kitchen",
              address: "725 9th Ave, New York, NY 10019",
            },
            {
              coordinates: [-73.95621342276895, 40.77225519589616],
              title: "My Restaurant - Upper East Side",
              address: "300 E 77th St, New York, NY 10075",
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
      <h1>My Restaurant</h1>
      <div id="map"></div>
    </div>
  );
}

export default App;
