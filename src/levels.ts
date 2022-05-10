import chalkin from "https://deno.land/x/chalkin/mod.ts";

export enum LOG_TYPE {
  Fatal = "Fatal",
  Error = "Error",
  Warn = "Warn",
  Log = "Log",
  Info = "Info",
  Success = "Success",
  Debug = "Debug",
}

export const LOG_ICON: Record<LOG_TYPE, () => string> = {
  [LOG_TYPE.Success]: () => chalkin.bold.green("✔"),
  [LOG_TYPE.Error]: () => chalkin.bold.red("ERROR"),
  [LOG_TYPE.Fatal]: () => chalkin.bold.redBright("FATAL"),
  [LOG_TYPE.Warn]: () => chalkin.bold.yellow("ℹ"),
  [LOG_TYPE.Log]: () => chalkin.bold.gray("ℹ"),
  [LOG_TYPE.Info]: () => chalkin.bold.gray("ℹ"),
  [LOG_TYPE.Debug]: () => chalkin.bold.white("›"),
};

export const LOG_MESSAGE: Record<LOG_TYPE, (message: string) => string> = {
  [LOG_TYPE.Success]: (message: string) => chalkin.greenBright(message),
  [LOG_TYPE.Error]: (message: string) => message,
  [LOG_TYPE.Fatal]: (message: string) => chalkin.bold.redBright(message),
  [LOG_TYPE.Warn]: (message: string) => chalkin.yellowBright(message),
  [LOG_TYPE.Log]: (message: string) => chalkin.gray(message),
  [LOG_TYPE.Info]: (message: string) => chalkin.black(message),
  [LOG_TYPE.Debug]: (message: string) => chalkin.black(message),
};
export const LOG_PREFIX: Record<LOG_TYPE, string> = {
  [LOG_TYPE.Success]: chalkin.bgGreen.whiteBright(" SUCCESS "),
  [LOG_TYPE.Error]: chalkin.bgRed.whiteBright(" ERROR "),
  [LOG_TYPE.Fatal]: chalkin.bgRed.whiteBright(" FATAL "),
  [LOG_TYPE.Warn]: chalkin.bgYellow.whiteBright(" WARN "),
  [LOG_TYPE.Log]: chalkin.bgGray.bgWhite(" LOG "),
  [LOG_TYPE.Info]: chalkin.bgGray.bgBlack(" INFO "),
  [LOG_TYPE.Debug]: chalkin.bgGray.bgBlack(" DEBUG "),
};
