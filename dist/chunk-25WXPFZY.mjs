import {
  prisma_default
} from "./chunk-3WMMDE64.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/services/products/ListByCategoryService.ts
var ListByCategoryService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ category_id }) {
      const products = yield prisma_default.product.findMany({
        where: {
          category_id
        }
      });
      if (!products) {
        throw new Error("Products not found");
      }
      return products;
    });
  }
};

export {
  ListByCategoryService
};
