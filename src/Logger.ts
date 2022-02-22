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
export enum StatusCode{
    ON,
    OFF,
}
export class logger {
    constructor() {
        this.errorLevel = StatusCode.ON;
        this.warningLevel = StatusCode.ON;
        this.informationalLevel = StatusCode.ON;
        this.debugLevel = StatusCode.ON;
    }
    errorLevel : StatusCode;
    warningLevel : StatusCode;
    informationalLevel : StatusCode;
    debugLevel : StatusCode;
    //at instantation the logger is configured 
    //each logger has a "write member" the write member is  a function
    //each logger has all the levels of logging
    //each logger can be configured to turn on/off logging
    displayLoggingLevel(){
        console.log(this.errorLevel);
        console.log(this.informationalLevel);
        console.log(this.debugLevel);
        console.log(this.warningLevel);

    }
    config(x: number) :void {
        if (x=1)
            this.errorLevel = StatusCode.ON;
        if (x=2)    
            this.
    }
}
export const dummy = 0;