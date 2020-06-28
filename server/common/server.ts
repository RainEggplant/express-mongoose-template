import express from "express";
import { Application } from "express";
import path from "path";
import http from "http";
import os from "os";
import cookieParser from "cookie-parser";
import installValidator from "./openapi";
import l from "./logger";
import morgan from "morgan";
import { IDatabase } from "./database";

const app = express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(__dirname + "/../..");
    app.set("appPath", root + "client");
    app.use(morgan("dev"));
    app.use(express.json({ limit: process.env.REQUEST_LIMIT || "100kb" }));
    app.use(
      express.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || "100kb",
      })
    );
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(express.static(`${root}/public`));
  }

  router(routes: (app: Application) => void): ExpressServer {
    installValidator(app, routes);
    return this;
  }

  database(db: IDatabase): ExpressServer {
    db.init();
    return this;
  }

  listen(p: string | number = process.env.PORT): Application {
    const welcome = (port) => () =>
      l.info(
        `up and running in ${
          process.env.NODE_ENV || "development"
        } @: ${os.hostname()} on port: ${port}`
      );
    http.createServer(app).listen(p, welcome(p));
    return app;
  }
}
