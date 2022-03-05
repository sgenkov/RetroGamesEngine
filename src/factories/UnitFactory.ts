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
    private testConstanty = window.innerHeight / 170;

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
    private createStaticUnit(unitSymbol): StaticUnit {
        return new StaticUnit(
            {
                x: unitSymbol.position.x * (GameModel.configs.elementsScaling * 10),
                y: unitSymbol.position.y * (GameModel.configs.elementsScaling * 11)//window.innerHeight / 15
            },
            {
                width: 1,
                height: 1
            },
            null,
            this.levelObjectMap.get(unitSymbol.type))
    };

    private createLiveUnit(unitSymbol): StaticUnit {
        return new LiveUnit(
            {
                x: unitSymbol.position.x * (GameModel.configs.elementsScaling * 10),
                y: unitSymbol.position.y * (GameModel.configs.elementsScaling * 11)
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
    };
    public createUnit(unitSymbol): BasicSlicedObject {
        let newUnitCreated: BasicSlicedObject;
        if (this.staticUnitSymbols.includes(unitSymbol.type)) {
            newUnitCreated = this.createStaticUnit(unitSymbol);
        } else if (this.liveUnitSymbols.includes(unitSymbol.type)) {
            newUnitCreated = this.createLiveUnit(unitSymbol);
        };
        return newUnitCreated;

    };
};