import Level from "../models/Level";

export default class LevelFactory {

    public getLevel(id: number): Level {
        return new Level(id);
    };

};
