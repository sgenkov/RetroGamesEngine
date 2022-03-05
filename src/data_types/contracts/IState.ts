export interface IState {
    enter();
    exit();
    clearStage();
    tickUpdate();
    processView();
}