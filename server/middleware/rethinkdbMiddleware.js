import { handleError } from "./errorHandlingMiddleware";

export function createConnection(req, res, next) {
  r.connect(config.rethinkdb)
    .then(function (conn) {
      req._rdbConn = conn;
      next();
    })
    .error(handleError(res));
}

export function closeConnection(req, res, next) {
  req._rdbConn.close();
}
