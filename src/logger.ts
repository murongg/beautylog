import { LOG_ICON, LOG_MESSAGE, LOG_PREFIX, LOG_TYPE } from "./levels.ts";
import { LoggerOptions } from "./types.ts";

const logger = console;

export class Logger {
  private _options: LoggerOptions = {
    prefix: true,
  };

  constructor(options?: LoggerOptions) {
    if (options) {
      this._options = options;
    }
  }

  set options(options: LoggerOptions) {
    this._options = options;
  }

  get options() {
    return this._options;
  }

  public success(message: string) {
    this._log(message, LOG_TYPE.Success);
  }

  public error(message: string) {
    this._log(message, LOG_TYPE.Error);
  }

  public warn(message: string) {
    this._log(message, LOG_TYPE.Warn);
  }

  public log(message: string) {
    this._log(message, LOG_TYPE.Log);
  }

  public info(message: string) {
    this._log(message, LOG_TYPE.Info);
  }

  public debug(message: string) {
    this._log(message, LOG_TYPE.Debug);
  }

  public fatal(message: string) {
    this._log(message, LOG_TYPE.Fatal);
  }

  private _log(message: string, logType: LOG_TYPE) {
    logger.log(
      `${this._prefix(logType)} ${LOG_ICON[logType]()} ${
        LOG_MESSAGE[logType](message)
      }`,
    );
  }

  private _prefix(logType: LOG_TYPE) {
    if (this._options.prefix) {
      return LOG_PREFIX[logType];
    }
  }
}
