import React, { useRef } from "react";
import { Coordinate } from "../../types";
import { parsePathsFromText } from "../../utils/parsePathsFromText";

interface Props {
  paths: Coordinate[][];
  setPaths: React.Dispatch<React.SetStateAction<Coordinate[][]>>;
  isSimulating: boolean;
  setIsSimulating: React.Dispatch<React.SetStateAction<boolean>>;
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputTab = ({
  paths,
  setPaths,
  isSimulating,
  setIsSimulating,
  isPaused,
  setIsPaused,
}: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const inputCoordinatesRef = useRef<HTMLInputElement>(null);

  const simulateDrone = () => {
    if (!paths.length) {
      window.alert("Add coordinates or upload file");
    } else {
      setIsSimulating(true);
    }
  };

  const pauseResumeSimulation = () => {
    setIsPaused((prev) => !prev);
  };

  const handleFileUpload = () => {
    const file = inputFileRef.current?.files
      ? inputFileRef.current?.files[0]
      : null;
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const paths = e.target?.result as string;
        setPaths(parsePathsFromText(paths));
      };

      reader.readAsText(file);
    }else{
      window.alert("Please choose a file");
    }
  };

  const handleCoordinatesInput = () => {
    const paths = inputCoordinatesRef.current?.value;
    if (paths) {
      setPaths(parsePathsFromText(paths));
    }else{
      window.alert("Enter coordinates");
    }
  };

  return (
    <div className="input-form">
      <label>
        Input Coordinates:
        <input
          type="text"
          ref={inputCoordinatesRef}
          placeholder="Enter coordinates"
        />
        <button onClick={handleCoordinatesInput}>Add Coordinates</button>
      </label>
      <br />
      <label>
        Upload .txt File:
        <input type="file" ref={inputFileRef} accept=".txt" />
        <button onClick={handleFileUpload}>Upload File</button>
      </label>
      <br />
      <button onClick={simulateDrone}>Simulate</button>

      {isSimulating && (
        <button onClick={pauseResumeSimulation}>
          {isPaused ? "Resume" : "Pause"}
        </button>
      )}
    </div>
  );
};

export default InputTab;