import {
  prisma_default
} from "./chunk-3WMMDE64.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/services/category/ListCategoryService.ts
var ListCategoryService = class {
  execute() {
    return __async(this, null, function* () {
      const categories = yield prisma_default.category.findMany({
        select: {
          id: true,
          name: true
        }
      });
      return categories;
    });
  }
};

export {
  ListCategoryService
};
