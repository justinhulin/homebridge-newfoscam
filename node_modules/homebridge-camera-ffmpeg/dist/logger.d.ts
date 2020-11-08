import { Logging } from 'homebridge';
export declare class Logger {
    private readonly log;
    private readonly debugMode;
    constructor(log: Logging);
    private formatMessage;
    info(message: string, device?: string): void;
    warn(message: string, device?: string): void;
    error(message: string, device?: string): void;
    debug(message: string, device?: string, alwaysLog?: boolean): void;
}
//# sourceMappingURL=logger.d.ts.map