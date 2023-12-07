import { useEffect, useState } from "react";
import { MarkerF, Polyline } from "@react-google-maps/api";
import drone from "../../assets/drone.gif";
import { getTimeDifference } from "../../utils/getTimeDifference";
import { Coordinate } from "../../types";

interface CustomMarkerProps {
  coordinates: Coordinate[];
  isSimulating: boolean;
  isPaused: boolean;
}

const CustomMarker = ({
  coordinates,
  isSimulating,
  isPaused,
}: CustomMarkerProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  let droneIcon: google.maps.Icon = { url: "" };
  if (window.google && window.google.maps) {
    droneIcon = {
      url: drone,
      scaledSize: new window.google.maps.Size(60, 60),
      anchor: new window.google.maps.Point(30, 30),
    };
  }

  useEffect(() => {
    if (isSimulating && !isPaused && currentIndex < coordinates.length - 1) {
      const currentTimeStamp = coordinates[currentIndex].timestamp;
      const nextTimeStamp = coordinates[currentIndex + 1].timestamp;

      const timeDiff = getTimeDifference(currentTimeStamp, nextTimeStamp);

      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, timeDiff);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, isSimulating, isPaused]);

  return (
    <>
      {isSimulating && (
        <>
          <MarkerF
            position={coordinates[currentIndex]}
            icon={droneIcon}
            animation={window.google.maps.Animation.DROP}
          />
          <Polyline
            path={coordinates}
            options={{
              strokeColor: "#344feb",
              strokeOpacity: 1,
              strokeWeight: 4,
            }}
          />
          <Polyline
            path={coordinates.slice(0, currentIndex + 1)}
            options={{
              strokeColor: "#adadad",
              strokeOpacity: 1,
              strokeWeight: 4,
            }}
          />
        </>
      )}
    </>
  );
};

export default CustomMarker;