import { ILevelPoint } from "./ILevelPoint";

export type IGraph = IVertex[];
export interface IVertex {
  id: ILevelPoint;
  isPassable: boolean;
  passableDirections: {
    left: boolean;
    up: boolean;
    right: boolean;
    down: boolean;
  };
}
