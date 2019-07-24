import "./common/env";
import Database from "./common/database";
import Server from "./common/server";
import routes from "./routes";

const port = parseInt(process.env.PORT);
const connectionString =
  process.env.NODE_ENV === "production"
    ? process.env.MONGODB_URI
    : process.env.NODE_ENV === "test"
    ? process.env.MONGODB_URI_TEST
    : process.env.MONGODB_URI_DEV;

const db = new Database(connectionString);
export default new Server()
  .database(db)
  .router(routes)
  .listen(port);
