import GraphProcessor from "./GraphProcessor";
export default class LevelGraphFactory {
    public levelGraph;
    constructor (level) {
        this.levelGraph = new GraphProcessor(level).calculateGraph(level);
    };

};