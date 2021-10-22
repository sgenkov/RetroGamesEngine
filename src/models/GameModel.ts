import game_configs from "../../configs/game-config.json";
class GameModel {
    public configs;
    constructor() {
        this.configs = game_configs;
    };
};

export default new GameModel();