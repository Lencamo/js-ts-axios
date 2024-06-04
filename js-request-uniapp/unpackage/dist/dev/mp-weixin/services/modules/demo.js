"use strict";
const services_index = require("../index.js");
function getDemoList() {
  return services_index.testRequest.get({
    url: "/demo"
  });
}
exports.getDemoList = getDemoList;
