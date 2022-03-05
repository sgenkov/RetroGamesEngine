import { ILevelObject } from "../contracts/ILevelObject";
import { StaticObjectType } from "../enums/StaticObjectTypeEnums";
import levels from "../../resources/levels.json";
import GameModel from "../models/GameModel";
import exp from "constants";


export default class LevelProcessor {
    private levelObjectMap: Map<string, string> = new Map(
        [
            ["#", StaticObjectType.Dirt],
            ["C", StaticObjectType.Concrete],
            ["H", StaticObjectType.Ladder],
            ["-", StaticObjectType.Rod],
            ["*", StaticObjectType.Gold],
            ["_", StaticObjectType.Hole],
            [" ", StaticObjectType.Air],
            ["X", StaticObjectType.HiddenLadder],
            ["P", "player"],
            ["E", "enemy"]
        ]
    );

    /**
     * 
     * @param levelId Accepts the id of the level to be processed. By this ID the method gets the string[] data from the levels json. Each string represents a row of level where each symbol points to different level construction object.
     * @returns Object with the corresponding coordinates in the level matrix and the type of unit that on this coordinate sits 
     */
    public processLevel(levelId: number): ILevelObject[][] {
        const processedWorld: ILevelObject[][] = [];
        levels.levels[levelId - 1].rows.forEach((worldRow: string, rowIndex: number) => {
            const processedRow: ILevelObject[] = [];
            worldRow.split("").forEach((rowSymbol: string, rowPositionIndex: number) => {
                if (GameModel.configs.gameSymbols.some(symbol => symbol === rowSymbol)) {
                    let resultObject: ILevelObject = null;
                    resultObject = {
                        position: {
                            x: rowPositionIndex,
                            y: rowIndex
                        },
                        type: rowSymbol//this.levelObjectMap.get(rowSymbol)
                    };
                    processedRow.push(
                        resultObject
                    );
                } else {
                    throw new Error(`Unknown level symbol : ${rowSymbol}`);
                };
            });
            processedWorld.push(processedRow);
        });

        return processedWorld;
    };

};
