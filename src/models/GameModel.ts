import game_configs from "../../configs/game-config.json";
import DebugConfig from "../DebugConfig";
class GameModel {
    public configs;
    constructor() {
        DebugConfig.constructors_log && console.log(`${this.constructor.name} constructed`);
        this.configs = game_configs;
    };
};

export default new GameModel();