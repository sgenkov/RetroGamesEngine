import { Graphics } from "pixi.js";
import { UnitDirection } from "../enums/UnitDirectionsEnums";
import UnitModel from "../models/UnitModel";
import { getRandomColor } from "../utils/utils";

export default class VisualObectsProcessor {
    private UNIT_MODEL = new UnitModel()
    framesInit(unit) {
        const { unitType, unitMode, scaling, direction, fullWidth, position } = unit;
        const tempRandColor: number = getRandomColor();
        const unitAnimationFrames = [];
        this.UNIT_MODEL.animationFrames[unitType].modes[unitMode].frames.forEach(frame => {
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