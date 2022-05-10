# beautylog

🍬 Terminal beautiful log for Deno

## 👽 Usage

```ts
import { logger } from "https://deno.land/x/beautylog/mod.ts";

logger.success("success");
logger.error("error");
logger.warn("warn");
logger.log("log");
logger.info("info");
logger.debug("debug");
logger.fatal("fatal");
```

## Custom your logger

```ts
import { Logger } from "https://deno.land/x/beautylog/mod.ts";

const myLogger = new Logger({
  prefix: false, // remove prefix
});
myLogger.success("this is message of success"); // ✔ this is message of success
```
