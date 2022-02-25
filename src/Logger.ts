/**
 * This is the module documentation comment for the Logger
 * module. You should replace this text with your own
 * documentation. Do not remove the "@module" directive at the
 * bottom of this comment, however: it tells TypeDoc that this
 * is a documentation comment for this whole module, not just
 * for some individual definition in the module.
 *
 * @module
 */

export enum Level {
    error = "error",
    warning = "warning",
    info = "info",
    debug = "debug",
}
export enum StatusCode{
    ON = "ON",
    OFF = "OFF",
}
export class Logger {
    constructor() {
        this.errorLevel = StatusCode.OFF;
        this.warningLevel = StatusCode.OFF;
        this.informationalLevel = StatusCode.OFF;
        this.debugLevel = StatusCode.OFF;
    }
    errorLevel : StatusCode;
    warningLevel : StatusCode;
    informationalLevel : StatusCode;
    debugLevel : StatusCode;

    displayLoggingLevel() :void {
        console.log(this.errorLevel);
        console.log(this.informationalLevel);
        console.log(this.debugLevel);
        console.log(this.warningLevel);
    }

    turnON(onOrOff: StatusCode, responseLevel: Level) :void {
        if (responseLevel === "error") {
            if (onOrOff === "ON")
                this.errorLevel = StatusCode.ON;
        }
        if (responseLevel === "info") {
            if (onOrOff === "ON")
                this.informationalLevel = StatusCode.ON;
        }
        if (responseLevel === "debug") {
            if (onOrOff === "ON")
                this.debugLevel = StatusCode.ON;
        }
        if (responseLevel === "warning") {
            if (onOrOff === "ON")
                this.warningLevel = StatusCode.ON;
        }
    }
    turnOff(onOrOff: StatusCode, responseLevel: Level) :void {
        if (responseLevel === "error") {
            if (onOrOff === "OFF")
                this.errorLevel = StatusCode.OFF;
        }
        if (responseLevel === "info") {
            if (onOrOff === "OFF")
                this.informationalLevel = StatusCode.OFF;
        }
        if (responseLevel === "debug") {
            if (onOrOff === "OFF")
                this.debugLevel = StatusCode.OFF;
        }
        if (responseLevel === "warning") {
            if (onOrOff === "OFF")
                this.warningLevel = StatusCode.OFF;
        }
    }

    printMessage(input : string) : void {
        if (this.errorLevel === "ON")
            console.error(input);
        else if (this.informationalLevel === "ON")
            console.info(input);
        else if (this.debugLevel === "ON")
            console.debug(input);
        else if (this.warningLevel === "ON")
            console.warn(input);
    }
}