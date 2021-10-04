import { ILevelObject } from "../contracts/ILevelObject";
import { StaticObjectType } from "../enums/StaticObjectTypeEnums";
import levels from "../../resources/levels.json";


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
            ["X", "hiddenLadder"],
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
            });
            processedWorld.push(processedRow);
        });

        return processedWorld;
    };

};
