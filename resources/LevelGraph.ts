import GraphProcessor from "../src/processors/GraphProcessor";
export default class LevelGraph {
    public levelGraph;
    constructor (level) {
        this.levelGraph = new GraphProcessor(level).calculateGraph(level);
    };

};