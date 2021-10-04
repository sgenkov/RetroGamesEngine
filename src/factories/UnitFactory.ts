import { ILevelObject } from "../contracts/ILevelObject";
import BasicSlicedObject from "../models/BasicSlicedObject";
import LiveUnit from "../models/LiveUnit";
import StaticUnit from "../models/StaticUnit";

export default class UnitFactory {
    private staticUnitSymbols = "#CH-*_ X";
    private liveUnitSymbols = "PE";
    private symMap: Map<string, number> = new Map ([
        ["", 1]
    ])
    public createUnit(unitSymbol: string): BasicSlicedObject {
        // console.log(unitSymbol);
        // console.log(this.staticUnitSymbols.includes('C') );
        if (this.staticUnitSymbols.includes(unitSymbol)) {
            return new StaticUnit({x: 3, y:4 }, { width: 1, height: 1 }, null, );
        } else if (this.liveUnitSymbols.includes(unitSymbol)) {
            return new LiveUnit();
        }
        
        // return new LiveUnit();
    };
};