import { ILevelObject } from "../contracts/ILevelObject";
import LevelProcessor from "../processors/LevelProcessor";

export default class Level {
    private _world: ILevelObject[][];
    private id: number;
    constructor(id: number) {
        this.id = id;
        this._world = new LevelProcessor().processLevel(id);
    };

    public get world(): ILevelObject[][] {
        return this._world;
    };

    public getUnit(unitSymbol: string) {}

    
};