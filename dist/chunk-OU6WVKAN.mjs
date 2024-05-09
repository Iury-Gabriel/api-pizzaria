import {
  prisma_default
} from "./chunk-3WMMDE64.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/services/products/CreateProductService.ts
var CreateProductService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ name, description, price, banner, category_id }) {
      const product = yield prisma_default.product.create({
        data: {
          name,
          description,
          price,
          banner,
          category_id
        }
      });
      return product;
    });
  }
};

export {
  CreateProductService
};
