import "./common/env";
import Database from "./common/database";
import Server from "./common/server";
import routes from "./routes";

const port = parseInt(process.env.PORT || "3000");
const connectionString =
  process.env.NODE_ENV === "production"
    ? process.env.MONGODB_URI
    : process.env.NODE_ENV === "test"
    ? process.env.MONGODB_URI_TEST ||
      "mongodb://localhost:27017/express-mongoose-template"
    : process.env.MONGODB_URI_DEV ||
      "mongodb://localhost:27017/express-mongoose-template-test";

const db = new Database(connectionString);
export default new Server().database(db).router(routes).listen(port);
