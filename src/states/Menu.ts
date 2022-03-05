import { app } from "../index";
import { Text } from 'pixi.js';
import DebugConfig from "../DebugConfig";

export default class Menu {
    private readonly name: string;
    private header: Text;
    
    constructor() {
        DebugConfig.constructors_log && console.log(`${this.constructor.name} constructed`);
        this.name = "menu";
        this.header = new Text("New Game", {
            fontSize: 35,
            fill: "#0cc000",
            align: "center",
            stroke: "#000000",
            strokeThickness: 2,
        });
        this.header.anchor.set(0.5);
        // console.log(app.view.width);
        
        this.header.position.x = 200//app.view.width / 2;
        this.header.position.y = 200//app.view.height / 2;
        this.header.interactive = true;
        this.header.buttonMode = true;
        this.header.on("pointerdown", this.onClick);
        this.header.on("mouseover", this.onClick);
        app.stage.addChild(this.header);
    };

    // enter = () => {
    //     // console.log('MENU INIT');
    //     this.active = true;
    //     // debugger;
    //     this.render();
    // };

    // exit = () => {
    //     this.active = false;
    //     this.isCompleted = false;
    //     app.stage.removeChild(this.text);
    //     // console.log("MENU DEINIT");
    //     this.text.removeListener("pointerdown", this.onClick);
    //     this.text = null;
    //     // debugger;
    // };

    render = () => {
        // console.log('render');
        // this.header = new Text("New Game", {
        //     color: 0x111111
        // });
        // this.header.anchor.set(0.5);
        // console.log(app.view.width);
        
        // this.header.position.x = 200//app.view.width / 2;
        // this.header.position.y = 200//app.view.height / 2;
        // this.header.interactive = true;
        // this.header.buttonMode = true;
        // this.header.on("pointerdown", this.onClick);
        // this.header.on("mouseover", this.onClick);
        // app.stage.addChild(this.header);
        // console.log('stage ', app.stage);
        // console.log(app.stage.addChild(this.header));
        
    };

    ticker = () => {
        // console.log("menu ticker");
        // console.log('menu ticker');
    }

    onClick = () => {
        console.log('CLICK');
        
        // model.setState({
        //     currentScreen: "play"
        // })
    };
};