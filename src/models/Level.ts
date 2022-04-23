import { ILevelObject } from "../data_types/contracts/ILevelObject";
import DebugConfig from "../DebugConfig";
import LevelProcessor from "../processors/LevelProcessor";
import ConsoleUtil from "../utils/ConsoleUtil";
const print = ConsoleUtil.createLog('Level', '#8DBE00');
const printInitial = ConsoleUtil.createLog('Level', '#F2E517');


export default class Level {
    private _world: ILevelObject[][];
    private id: number;
    constructor(id: number) {
        //TODO next FULL TIPISATION
        DebugConfig.constructors_log && printInitial(`${this.constructor.name} constructed`);
        this.id = id;
        this._world = LevelProcessor.processLevel(id);
    };

    public get world(): ILevelObject[][] {
        return this._world;
    };

    public getUnit(unitSymbol: string) {}

    
};