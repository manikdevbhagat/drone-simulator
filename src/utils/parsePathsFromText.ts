import { Coordinate } from "../types";

export const parsePathsFromText = (paths: string) => {
  const pathsArray: Coordinate[][] = [];
  const arrays = paths.split(";");
  for (const array of arrays) {
    try {
      pathsArray.push(JSON.parse(array));
    } catch (err) {
      console.log(err);
    }
  }
  return pathsArray;
};