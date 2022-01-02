import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Room } from '@material-ui/icons';

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 46,
    longitude: 17,
    zoom: 4,
  });
  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker
          latitude={48.858093}
          longitude={2.294694}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Room style={{fontSize: viewport.zoom * 7, color: "slateblue"}}/>
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default App;
