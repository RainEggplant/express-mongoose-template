import bluebird from "bluebird";
import mongoose from "mongoose";
import l from "./logger";

export interface IDatabase {
  init(): void;
}

export default class Database implements IDatabase {
  connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  init(): void {
    mongoose.Promise = bluebird;
    mongoose
      .connect(this.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
      })
      .then(() => {
        l.info("Database connected.");
      })
      .catch((err) => {
        l.error(
          "MongoDB connection error. Please make sure MongoDB is running.\n" +
            err
        );
        process.exit(1);
      });

    const db = mongoose.connection;

    db.on("error", (err) => l.error("MongoDB error:\n" + err));
  }
}
