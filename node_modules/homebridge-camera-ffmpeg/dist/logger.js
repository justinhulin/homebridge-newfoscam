"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor(log) {
        this.log = log;
        this.debugMode = process.argv.includes('-D') || process.argv.includes('--debug');
    }
    formatMessage(message, device) {
        let formatted = '';
        if (device) {
            formatted += '[' + device + '] ';
        }
        formatted += message;
        return formatted;
    }
    info(message, device) {
        this.log.info(this.formatMessage(message, device));
    }
    warn(message, device) {
        this.log.warn(this.formatMessage(message, device));
    }
    error(message, device) {
        this.log.error(this.formatMessage(message, device));
    }
    debug(message, device, alwaysLog = false) {
        if (this.debugMode) {
            this.log.debug(this.formatMessage(message, device));
        }
        else if (alwaysLog) {
            this.info(message, device);
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map