/* eslint-disable linebreak-style */
import { Logger } from "./Logger";
window.onload = () => {
    let log1 = new Logger();
    log1.turnON("ON", "info");
    log1.printMessage("test");
};