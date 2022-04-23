import { ILevelObject } from "../data_types/contracts/ILevelObject";
import DebugConfig from "../DebugConfig";
// import { testLevelFactory } from "../index";
import GameModel from "../models/GameModel";
import Level from "../models/Level";
import ConsoleUtil from "../utils/ConsoleUtil";
const printInitial = ConsoleUtil.createLog('GraphProcessor', '#F2E517');

export default class GraphProcessor {
    private readonly passableSymbols = ["H", "-", "*", "_", " ", "P", "E", "X"];
    public levelGraph = null;
    public lev1: Level;
    constructor(level) {
        DebugConfig.constructors_log && printInitial(`${this.constructor.name} constructed`);
        this.lev1 = level;//testLevelFactory.getLevel(1); // TODO unify this factory
        // console.log(this.lev1);
    };

    public calculateGraph(level) {
        const vertices = [];
        this.lev1.world.forEach((levelRow, rowIndex, level) => {
            levelRow.forEach((rowSymbol, symbolIndex, row) => {
                // if (GameModel.configs.gameSymbols.some())
                const vertex = {
                    id: {
                        x: rowSymbol.position.x,
                        y: rowSymbol.position.y
                    },
                    isPassable: this.passableSymbols.some((checkSymbol) => {
                        return checkSymbol === rowSymbol.type;
                    }),
                    passableDirections:
                    {
                        left: this.isLeftBoundPassable(rowSymbol, row[symbolIndex - 1]),
                        up: this.isUpBoundPassable(rowSymbol, level[rowIndex - 1]),
                        right: this.isRightBoundPassable(rowSymbol, row[symbolIndex + 1]),
                        down: this.isDownBoundPassable(rowSymbol, level[rowIndex + 1])
                    }
                };
                vertices.push(vertex);
            });
        });

        return vertices;
    };
    private isBlockerUnit() {

    };

    private isLeftBoundPassable(currentSymbol: ILevelObject, leftSymbol: ILevelObject): boolean {

        return (currentSymbol.position.x > 0)
            && leftSymbol
            && (this.passableSymbols.some((checkSymbol) => {
                return checkSymbol === leftSymbol.type;
            }));
    };
    private isUpBoundPassable(currentSymbol: ILevelObject, upperRow: ILevelObject[]): boolean {

        return (currentSymbol.position.y > 0)
            && upperRow
            && (this.passableSymbols.some((checkSymbol) => {
                return checkSymbol === upperRow[currentSymbol.position.x].type;
            }));
    };
    private isRightBoundPassable(currentSymbol: ILevelObject, rightSymbol: ILevelObject): boolean {
        
        return (currentSymbol.position.x < GameModel.configs.levelColumns - 1)
            && rightSymbol
            && (this.passableSymbols.some((checkSymbol) => {
                return checkSymbol === rightSymbol.type;
            }));
    };
    private isDownBoundPassable(currentSymbol: ILevelObject, downRow: ILevelObject[]): boolean {
        return (currentSymbol.position.y < GameModel.configs.levelRows - 1)
            && downRow
            && (this.passableSymbols.some((checkSymbol) => {
                return checkSymbol === downRow[currentSymbol.position.x].type;
            }));
    };

};