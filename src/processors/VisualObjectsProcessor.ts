import { Graphics } from "pixi.js";
import { UnitDirection } from "../data_types/enums/UnitDirectionsEnums";
import DebugConfig from "../DebugConfig";
import GameModel from "../models/GameModel";
import UnitModel from "../models/UnitModel";
import Utils from "../utils/utils";

export default class VisualObjectsProcessor {
    constructor() {
        DebugConfig.constructors_log && console.log(`${this.constructor.name} constructed`);
    }
    framesInit(unit) {
        const UNIT_MODEL = new UnitModel(unit.objectType);
        
        const { unitType, unitMode, scaling, direction, fullWidth, position, objectType } = unit;
        let tempRandColor = 23;
        if (GameModel.configs.randomElementColors) {
            tempRandColor = Utils.getRandomColor();
        } else {
            tempRandColor = 0x60EF35;
        };
        const unitAnimationFrames = [];
            UNIT_MODEL.animationFrames[unitType].modes[unitMode].frames.forEach(frame => {
                
                unitAnimationFrames.push(this.createFrame(
                    frame.id,
                    frame.elements,
                    scaling,
                    direction,
                    fullWidth,
                    position,
                    tempRandColor
                ));
            });

        return unitAnimationFrames;
    };
    createFrame = (id, elements, scaling, direction, fullWidth, position, color?) => {
        let graphic = new Graphics();
        graphic["id"] = id;
        elements.forEach(element => {
            graphic.beginFill(color);
            graphic.drawRect(
                element.x * scaling,
                element.y * scaling,
                element.width * scaling,
                element.height * scaling
            );
            graphic.endFill();
            if (direction) {
                graphic.x = direction === UnitDirection.Right
                ? 0
                : fullWidth * scaling; // lemmy this causes the elements right-shifting
            } else {
                graphic.x = 0;
            };
           
            graphic.x += position.x;

            graphic.y = position.y;
            graphic.scale.x = direction === UnitDirection.Left ? -1 : 1;
        })
        // graphic.tint = 0xFF2700
        return graphic;
    };
};