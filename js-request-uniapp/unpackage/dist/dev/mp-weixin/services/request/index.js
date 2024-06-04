"use strict";
const common_vendor = require("../../common/vendor.js");
const services_request_config = require("./config.js");
class RenRequest {
  constructor(config) {
    this.config = config;
    common_vendor.index.addInterceptor("request", {
      // 请求拦截
      invoke(args) {
        args.url = services_request_config.BASE_URL + args.url;
      },
      // 响应拦截
      success(args) {
      }
    });
  }
  request(options) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        ...this.config,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        ...options,
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
  get(options) {
    return this.request({
      ...options,
      method: "get"
    });
  }
  post(options) {
    return this.request({
      ...options,
      method: "post"
    });
  }
}
exports.RenRequest = RenRequest;
