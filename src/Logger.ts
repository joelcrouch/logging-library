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

/* This is a dummy definition just so that this file has at
 * least one export, which is required for the test suite to
 * run. Delete this once you've defined at least one export of
 * your own in this file.
 */
export enum Level {
    error,
    warning,
    info,
    debug,
}
export enum StatusCode{
    ON,
    OFF,
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

    turnOff(onOrOff: string, responseLevel: string) :void {
        if (responseLevel === "error") {
            if (onOrOff === "ON")
                this.errorLevel = StatusCode.OFF;
        }
        if (responseLevel === "info") {
            if (onOrOff === "ON")
                this.informationalLevel = StatusCode.OFF;
        }
        if (responseLevel === "debug") {
            if (onOrOff === "ON")
                this.debugLevel = StatusCode.OFF;
        }
        if (responseLevel === "warning") {
            if (onOrOff === "ON")
                this.warningLevel = StatusCode.OFF;
        }
    }
    messageLevel : boolean [] = [ false, false, false, false ];
    //informational, error, warning, debug//

    configureOn(chooseMessageLevel :string) : void {
        if (chooseMessageLevel === "error")
            this.messageLevel[1] = true;
        else if (chooseMessageLevel === "info")
            this.messageLevel[0] = true;
        else if (chooseMessageLevel === "warning")
            this.messageLevel[2] = true;
        else if (chooseMessageLevel === "debug")
            this.messageLevel[2] = true;
    }
}
export const dummy = 0;