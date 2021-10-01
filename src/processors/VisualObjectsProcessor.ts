import { Graphics } from "pixi.js";
import { ObjectType } from "../enums/ObjectTypeEnums";
import { UnitDirection } from "../enums/UnitDirectionsEnums";
import UnitModel from "../models/UnitModel";
import { getRandomColor } from "../utils/utils";

export default class VisualObjectsProcessor {
    framesInit(unit) {
        const UNIT_MODEL = new UnitModel(unit.objectType);
        
        const { unitType, unitMode, scaling, direction, fullWidth, position, objectType } = unit;
        const tempRandColor: number = getRandomColor();
        const unitAnimationFrames = [];
        // console.log('object type : ', objectType);

        // if (objectType === ObjectType.LiveUnit) {
            // console.log('graphic 1 :',
            // // frame.id,
            // // frame.elements,
            // scaling,
            // direction,
            // fullWidth,
            // position,
            // tempRandColor);
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
        // } else {

        // };

        return unitAnimationFrames;
    };
    createFrame = (id, elements, scaling, direction, fullWidth, position, color?) => {
        // console.log('graphic :', id, elements, scaling, direction, fullWidth, position, color);
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
            graphic.x = direction === UnitDirection.Right
                ? 0
                : fullWidth * scaling;
            graphic.x += position.x;

            graphic.y = position.y;
            graphic.scale.x = direction === UnitDirection.Left ? -1 : 1;
        })
        // graphic.tint = 0xFF2700
        // console.log("element created");
        
        return graphic;
    };
};