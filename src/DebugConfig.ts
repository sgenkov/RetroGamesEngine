class DebugConfig {
    public constructors_log = true;
    public keyboard_listeners = false;
    public mouse_listeners = false;

    constructor() {
        this.constructors_log && console.log(`${this.constructor.name} constructed`);
    }
}

export default new DebugConfig();