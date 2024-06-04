"use strict";
const common_vendor = require("../../common/vendor.js");
const services_modules_demo = require("../../services/modules/demo.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const demoList = common_vendor.ref();
    const dataInit = async () => {
      const res = await services_modules_demo.getDemoList();
      demoList.value = res;
      console.log(res);
    };
    dataInit();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(demoList.value)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/lencamo/Documents/HBuilderProjects/js-request-uniapp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
