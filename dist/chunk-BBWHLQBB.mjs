import {
  prisma_default
} from "./chunk-3WMMDE64.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/services/category/CreateCategoryService.ts
var CreateCategoryService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ name }) {
      if (!name) {
        throw new Error("Name incorrect");
      }
      const category = yield prisma_default.category.create({
        data: {
          name
        },
        select: {
          id: true,
          name: true
        }
      });
      return category;
    });
  }
};

export {
  CreateCategoryService
};
