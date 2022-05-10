import { LOG_MESSAGE, LOG_PREFIX, LOG_TYPE } from "./levels.ts";

const logger = console;

export class Logger {
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
    logger.log(`${LOG_PREFIX[logType]()} ${LOG_MESSAGE[logType](message)}`);
  }
}
