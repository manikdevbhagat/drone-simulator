import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import CustomMarker from "./CustomMarker";
import { Coordinate } from "../../types";

interface Props {
  paths: Coordinate[][];
  isSimulating: boolean;
  isPaused: boolean;
}
const Map = ({ paths, isSimulating, isPaused }: Props) => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY as string,
  });

  if (!isLoaded) {
    return <div className="error">Map not loaded</div>;
  }

  return (
    <GoogleMap
      center={paths.length > 0 ? paths[0][0] : { lat: 0, lng: 0 }}
      zoom={12}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    >
      {paths.map((path, index) => (
        <CustomMarker
          key={index}
          coordinates={path}
          isSimulating={isSimulating}
          isPaused={isPaused}
        />
      ))}
    </GoogleMap>
  );
};

export default Map;