import { ILevelObject } from "../data_types/contracts/ILevelObject";
import DebugConfig from "../DebugConfig";
import LevelProcessor from "../processors/LevelProcessor";

export default class Level {
    private _world: ILevelObject[][];
    private id: number;
    constructor(id: number) {
        DebugConfig.constructors_log && console.log(`${this.constructor.name} constructed`);
        this.id = id;
        this._world = new LevelProcessor().processLevel(id);
    };

    public get world(): ILevelObject[][] {
        return this._world;
    };

    public getUnit(unitSymbol: string) {}

    
};