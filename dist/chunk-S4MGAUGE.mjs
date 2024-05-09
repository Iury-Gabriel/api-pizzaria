import {
  CreateProductService
} from "./chunk-OU6WVKAN.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/products/CreateProductController.ts
var CreateProductController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const { name, description, price, category_id } = req.body;
      const createProductService = new CreateProductService();
      if (!req.file) {
        throw new Error("File not found");
      } else {
        const { originalname, filename: banner } = req.file;
        const product = yield createProductService.execute({
          name,
          description,
          price,
          banner,
          category_id
        });
        return res.json(product);
      }
    });
  }
};

export {
  CreateProductController
};
