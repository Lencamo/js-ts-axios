"use strict";
const services_request_index = require("./request/index.js");
const services_request_config = require("./request/config.js");
const testRequest = new services_request_index.RenRequest({
  timeout: services_request_config.TIMEOUT
});
exports.testRequest = testRequest;
