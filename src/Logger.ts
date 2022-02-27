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
        this.errorLevel = 0;
        this.warningLevel = 0;
        this.informationalLevel = 0;
        this.debugLevel = 0;
    }
    errorLevel : number;
    warningLevel : number;
    informationalLevel : number;
    debugLevel : number;

    displayLoggingLevel() :void {
        if (this.errorLevel === 0)
            console.log("ERROR LEVEL is OFF");
        else console.log("ERROR LEVEL is ON");
        if (this.warningLevel === 0)
            console.log("WARNING LEVEL is OFF");
        else console.log("WARNING LEVEL is ON");
        if (this.informationalLevel === 0)
            console.log("INFORMATIONAL LEVEL is OFF");
        else console.log("INFORMATIONAL LEVEL is ON");
        if (this.debugLevel === 0)
            console.log("DEBUG LEVEL is OFF");
        else console.log("DEBUG LEVEL is ON");
    }

    turnON(onOrOff: string, responseLevel: string) :void {
        if (responseLevel === "error") {
            if (onOrOff === "ON")
                this.errorLevel = 1;
        }
        if (responseLevel === "info") {
            if (onOrOff === "ON")
                this.informationalLevel = 1;
        }
        if (responseLevel === "debug") {
            if (onOrOff === "ON")
                this.debugLevel = 1;
        }
        if (responseLevel === "warning") {
            if (onOrOff === "ON")
                this.warningLevel = 1;
        }
    }
    turnOff(onOrOff: string, responseLevel: string) :void {
        if (responseLevel === "error") {
            if (onOrOff === "OFF")
                this.errorLevel = 0;
        }
        if (responseLevel === "info") {
            if (onOrOff === "OFF")
                this.informationalLevel = 0;
        }
        if (responseLevel === "debug") {
            if (onOrOff === "OFF")
                this.debugLevel = 0;
        }
        if (responseLevel === "warning") {
            if (onOrOff === "OFF")
                this.warningLevel = 0;
        }
    }

    printMessage(input : string) : void {
        if (this.errorLevel === 1)
            console.error("ERROR:" + input);
        else if (this.informationalLevel === 1)
            console.info("INFORMATIONAL:" + input);
        else if (this.debugLevel === 1)
            console.debug("DEBUG:" + input);
        else if (this.warningLevel === 1)
            console.warn("WARNING:" + input);
    }
}