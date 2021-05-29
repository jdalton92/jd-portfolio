const logger = require("./logger");

const requestLogger = (request, response, next) => {
  logger.info(
    "IP:          ",
    request.headers["x-forwarded-for"] ||
      request.connection.remoteAddress ||
      request.ip
  );
  logger.info("Method:      ", request.method);
  logger.info("Path:        ", request.path);
  logger.info("Body:        ", request.body);
  logger.info("Res status:  ", response.statusCode);
  logger.info("---");
  next();
};

const errorHandler = (error, request, response, next) => {
  if (error) {
    const status = error.status || error.statusCode || 500;
    const message =
      error.message || error.statusMessage || "Internal server error";
    logger.error(error);

    return response.status(status).send({
      status,
      message,
    });
  }

  next(error);
};

module.exports = {
  errorHandler,
  requestLogger,
};
