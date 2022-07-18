import express from "express";
import { config } from "./config";
import r from "rethinkdb";

const app = express();

app.use(express.json());

// Middleware that will create a connection to the database
app.use(createConnection);

// // Define main routes
// app.route('/todo/get').get(get);
// app.route('/todo/new').put(create);
// app.route('/todo/update').post(update);
// app.route('/todo/delete').post(del);

// Middleware to close a connection to the database
app.use(closeConnection);

function handleError(res) {
  return function (error) {
    res.send(500, { error: error.message });
  };
}

/*
 * Create a RethinkDB connection, and save it in req._rdbConn
 */
function createConnection(req, res, next) {
  r.connect(config.rethinkdb)
    .then(function (conn) {
      req._rdbConn = conn;
      next();
    })
    .error(handleError(res));
}

/*
 * Close the RethinkDB connection
 */
function closeConnection(req, res, next) {
  req._rdbConn.close();
}

/*
 * Create tables/indexes then start express
 */
r.connect(config.rethinkdb, function (err, conn) {
  if (err) {
    console.log("Could not open a connection to initialize the database");
    console.log(err.message);
    process.exit(1);
  }

  r.table("users")
    .indexWait("createdAt")
    .run(conn)
    .then(function (err, result) {
      console.log("Table and index are available, starting express...");
      startExpress();
    })
    .error(function (err) {
      // The database/table/index was not available, create them
      r.dbCreate(config.rethinkdb.db)
        .run(conn)
        .finally(function () {
          return r.tableCreate("users").run(conn);
        })
        .finally(function () {
          r.table("users").indexCreate("createdAt").run(conn);
        })
        .finally(function (result) {
          r.table("users").indexWait("createdAt").run(conn);
        })
        .then(function (result) {
          console.log("Table and index are available, starting express...");
          startExpress();
          conn.close();
        })
        .error(function (err) {
          if (err) {
            console.log(
              "Could not wait for the completion of the index `users`"
            );
            console.log(err);
            process.exit(1);
          }
          console.log("Table and index are available, starting express...");
          startExpress();
          conn.close();
        });
    });
});

function startExpress() {
  app.listen(config.express.port);
  console.log("Listening on port " + config.express.port);
}
