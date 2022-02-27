/**
 * This is the module documentation comment for the Logger
 * module.
 * The logger class is mutable.  A logger can be configured to have each
 * of the console methods turned on or off.
 *
 * The API uses the following methods: displayLoggingLevel, turnON,turnOff,
 * and printMessage.  When a logger is instantiated, the default function for
 * logging is turned off.  Each console function can be individually configured.
 *
 *
 * You should replace this text with your own
 * documentation. Do not remove the "@module" directive at the
 * bottom of this comment, however: it tells TypeDoc that this
 * is a documentation comment for this whole module, not just
 * for some individual definition in the module.
 *
 * @module
 */
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
    /** Method:     .displayLoggingLevel
     *  Usage:      Displays the console methods that are available in the
     *              current iteration of the logger.
     *  Example:    Logger log1; (All the console methods are turned off
     *              by default.)
     *              log1.displayLoggingLevel();
     *              output:
     *              ERROR LEVEL is OFF
     *              WARNING LEVEL is OFF
     *              INFORMATIONAL LEVEL is OFF
     *              DEBUG LEVEL is OFF
     * @module
     */
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
    /** Method:     .turnON(ON: string, responseLevel: string)
     *  Usage:      Configures the console methods to turn the assigned method
     *              on.  The method takes in a string value for ON, it must be
     *              a string value of "ON."  The other parameter is the console
     *              method name: "error", "info", "warning", "debug".  These
     *              string values are the only values that are supported.
     *  Example:    Logger log1; (All the console methods are turned off
     *              by default.)
     *              log1.displayLoggingLevel();
     *              output:
     *              ERROR LEVEL is OFF
     *              WARNING LEVEL is OFF
     *              INFORMATIONAL LEVEL is OFF
     *              DEBUG LEVEL is OFF
     *
     *              log1.turnON("ON", "error");
     *              log1.displayLoggingLevel();
     *              output:
     *              ERROR LEVEL is ON
     *              WARNING LEVEL is OFF
     *              INFORMATIONAL LEVEL is OFF
     *              DEBUG LEVEL is OFF
     * @module
     */
    turnON(ON: string, responseLevel: string) :void {
        if (responseLevel === "error") {
            if (ON === "ON")
                this.errorLevel = 1;
        }
        if (responseLevel === "info") {
            if (ON === "ON")
                this.informationalLevel = 1;
        }
        if (responseLevel === "debug") {
            if (ON === "ON")
                this.debugLevel = 1;
        }
        if (responseLevel === "warning") {
            if (ON === "ON")
                this.warningLevel = 1;
        }
    }
    /** Method:     .turnOff(Off: string, responseLevel: string)
     *  Usage:      Configures the console methods to turn the assigned method
     *              off.  The method takes in a string value for ON, it must be
     *              a string value of "OFF."  The other parameter is the console
     *              method name: "error", "info", "warning", "debug".  These
     *              string values are the only values that are supported.
     *  Example:    Logger log1; (All the console methods are turned off
     *              by default.)
     *              log1.displayLoggingLevel();
     *              output:
     *              ERROR LEVEL is OFF
     *              WARNING LEVEL is OFF
     *              INFORMATIONAL LEVEL is OFF
     *              DEBUG LEVEL is OFF
     *
     *              log1.turnON("ON", "error");
     *              log1.turnON("ON", "warning");
     *              log1.displayLoggingLevel();
     *              output:
     *              ERROR LEVEL is ON
     *              WARNING LEVEL is ON
     *              INFORMATIONAL LEVEL is OFF
     *              DEBUG LEVEL is OFF
     *
     *              log1.turnON("OFF", "warning");
     *              log1.displayLoggingLevel();
     *              output:
     *              ERROR LEVEL is ON
     *              WARNING LEVEL is OFF
     *              INFORMATIONAL LEVEL is OFF
     *              DEBUG LEVEL is OFF
     * @module
     */
    turnOff(Off: string, responseLevel: string) :void {
        if (responseLevel === "error") {
            if (Off === "OFF")
                this.errorLevel = 0;
        }
        if (responseLevel === "info") {
            if (Off === "OFF")
                this.informationalLevel = 0;
        }
        if (responseLevel === "debug") {
            if (Off === "OFF")
                this.debugLevel = 0;
        }
        if (responseLevel === "warning") {
            if (Off === "OFF")
                this.warningLevel = 0;
        }
    }
    /** Method:     .printMessage
     *  Usage:      Displays console messages that are available in the
     *              current iteration of the logger.
     *  Example:    Logger log1; (All the console methods are turned off
     *              by default.)
     *              log1.displayLoggingLevel();
     *              log1.turnOn("ON", "debug");
     *              log1.printMessage("test1");
     *              output:
     *              DEBUG: test1
     * @module
     */
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