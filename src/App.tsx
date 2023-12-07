import { useState } from "react";
import "./App.css";
import InputTab from "./components/Map/InputTab";
import Map from "./components/Map/Map";
import { Coordinate } from "./types";

function App() {
  const [paths, setPaths] = useState<Coordinate[][]>([]);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  return (
    <div className="app">
      <InputTab
        paths={paths}
        setPaths={setPaths}
        isSimulating={isSimulating}
        setIsSimulating={setIsSimulating}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
      />
      <Map paths={paths} isSimulating={isSimulating} isPaused={isPaused} />
    </div>
  );
}

export default App;