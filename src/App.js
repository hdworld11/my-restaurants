import logo from './logo.svg';
import './App.css';
import { createMap, createAmplifyGeocoder} from "maplibre-gl-js-amplify";
import { drawPoints } from "maplibre-gl-js-amplify";
import "maplibre-gl/dist/maplibre-gl.css";
import {useEffect} from 'react';
import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";
import "maplibre-gl-js-amplify/dist/public/amplify-geocoder.css"; // Optional CSS for Amplify recommended styling
import { DataStore, Predicates } from 'aws-amplify';
import { Branch } from "./models";

var setData

async function initializeMap() {
  const map = await createMap({
      container: "map", // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
      center: [-73.98597609730648, 40.751874635721734],
      zoom: 11,
  })
  map.addControl(createAmplifyGeocoder())
  loadPointsOnMap(map)
  return map;
}

async function addRestaurantLocation(name, description, latitude, longitude) {
  try {
    await DataStore.save(
      new Branch({
        name: name,
        description: description,
        latitude: latitude,
        longitude: longitude
      })
    );
    console.log("Branch saved successfully!");
  } catch (error) {
    console.log("Error saving restaurant branch", error);
  }
}

async function getRestauratLocations() {
  // get restaurant branches from the database
  try {
    const branches = await DataStore.query(Branch);
    console.log("Restaurant branches retrieved successfully!", JSON.stringify(branches, null, 2));

    return branches
  } catch (error) {
    console.log("Error retrieving restaurant branches", error);
  }
}

async function addRestaurantLocations(map, search_result) {

  console.log(search_result);
  if (search_result) {
    for (let value of Object.values(search_result)) {
      console.log(value); // John, then 30
    }

    var name = search_result.place_name;
    var lat = search_result.center[0];
    var long = search_result.center[1];
    console.log(search_result.center);

    addRestaurantLocation(name, name, lat, long);
  }

  loadPointsOnMap(map)
}

async function loadPointsOnMap(map){
  let branches = await getRestauratLocations()

  let restBranches = []

  for (var i = 0; i < branches.length; i++){

    var innerObj = {}
    innerObj["coordinates"] = [branches[i].latitude, branches[i].longitude]
    innerObj["title"] = branches[i].name
    innerObj["description"] = branches[i].description

    restBranches.push(innerObj)
  }

  console.log(restBranches)

  setData(restBranches);

  map.on("load", function () {

    var output = drawPoints(`mySourceName`, // Arbitrary source name
                            restBranches, // An array of coordinate data, an array of Feature data, or an array of [NamedLocations](https://github.com/aws-amplify/maplibre-gl-js-amplify/blob/main/src/types.ts#L8)
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
    setData = output.setData
  });
}

function App() {

  var map
  var search_result

  useEffect( async () => {
    
    map = await initializeMap();



    addRestaurantLocations(map);

    const geocoder = createAmplifyGeocoder();
    document.getElementById("search").appendChild(geocoder.onAdd());

    geocoder.on("results", function (event) {
      console.log(event)
    });

    geocoder.on("result", (result) => {
      console.log(result);
      search_result = result.result;
    });

    return function cleanup() {
      map.remove();
    };

  }, []);

  return (
    <div className="App">
      <h1>My Restaurant</h1>
      <button onClick={() => {addRestaurantLocations(map, search_result)}}>Save</button>
      <div id="search"></div>
      <div id="map"></div>
    </div>
  );
}

export default App;

//search bar
//enter location
// get location from search result - selected search result object
//hit save
// -- stores the location to datastore
// -- updates the map - rerenders the map to show the marker