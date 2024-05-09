import {
  CreateCategoryService
} from "./chunk-BBWHLQBB.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/category/CreateCategoryController.ts
var CreateCategoryController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const { name } = req.body;
      const createCategoryService = new CreateCategoryService();
      const category = yield createCategoryService.execute({
        name
      });
      return res.json(category);
    });
  }
};

export {
  CreateCategoryController
};
