import {
  ListByCategoryService
} from "./chunk-25WXPFZY.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/products/ListByCategoryController.ts
var ListByCategoryController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const category_id = req.params.category_id;
      const listByCategoryService = new ListByCategoryService();
      const products = yield listByCategoryService.execute({ category_id });
      return res.json(products);
    });
  }
};

export {
  ListByCategoryController
};
