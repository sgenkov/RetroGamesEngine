import { ILevelObject } from "../contracts/ILevelObject";
import { StaticObjectType } from "../enums/StaticObjectTypeEnums";
import { UnitType } from "../enums/UnitTypeEnums";
import BasicSlicedObject from "../models/BasicSlicedObject";
import LiveUnit from "../models/LiveUnit";
import StaticUnit from "../models/StaticUnit";
import GameModel from "../models/GameModel";

export default class UnitFactory {
    private staticUnitSymbols = "#CH-*_ X";
    private liveUnitSymbols = "PE";
    private testConstantX = window.innerWidth / 318;
    private testConstanty = window.innerHeight/ 170;

    private levelObjectMap: Map<string, string> = new Map(
        [
            ["#", StaticObjectType.Dirt],
            ["C", StaticObjectType.Concrete],
            ["H", StaticObjectType.Ladder],
            ["-", StaticObjectType.Rod],
            ["*", StaticObjectType.Gold],
            ["_", StaticObjectType.Hole],
            [" ", StaticObjectType.Air],
            ["X", "hiddenLadder"],
            ["P", "player"],
            ["E", "enemy"]
        ]
    );
    public createUnit(unitSymbol): BasicSlicedObject {
        if (this.staticUnitSymbols.includes(unitSymbol.type)) {

            return new StaticUnit(
                {
                    x: unitSymbol.position.x * GameModel.configs.elementsScaling * this.testConstantX - GameModel.configs.elementsScaling * this.testConstantX,
                    y: unitSymbol.position.y * GameModel.configs.elementsScaling * this.testConstanty
                },
                {
                    width: 1,
                    height: 1
                },
                null,
                this.levelObjectMap.get(unitSymbol.type))
        } else if (this.liveUnitSymbols.includes(unitSymbol.type)) {
            
            return new LiveUnit(
                {
                    x: unitSymbol.position.x * GameModel.configs.elementsScaling * this.testConstantX - GameModel.configs.elementsScaling * this.testConstantX,
                    y: unitSymbol.position.y * GameModel.configs.elementsScaling * this.testConstanty
                },
                undefined,
                undefined,
                undefined,
                5,
                undefined,
                unitSymbol.type === "E" 
                    ? UnitType.Enemy
                    : UnitType.Player

            );
        }

    };
};