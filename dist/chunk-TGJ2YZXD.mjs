import {
  AddItemService
} from "./chunk-QR7W5D42.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/order/AddItemController.ts
var AddItemController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const { order_id, product_id, amount } = req.body;
      const addItemService = new AddItemService();
      const order = yield addItemService.execute({
        order_id,
        product_id,
        amount
      });
      return res.json(order);
    });
  }
};

export {
  AddItemController
};
