import {
  ListCategoryService
} from "./chunk-XJRUIPN4.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/category/ListCategoryController.ts
var ListCategoryController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const listCategoryService = new ListCategoryService();
      const categories = yield listCategoryService.execute();
      return res.json(categories);
    });
  }
};

export {
  ListCategoryController
};
