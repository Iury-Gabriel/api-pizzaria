import {
  CreateOrderService
} from "./chunk-POSNKGTJ.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/order/CreateOrderController.ts
var CreateOrderController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const { table, name } = req.body;
      const createOrderService = new CreateOrderService();
      const order = yield createOrderService.execute({
        table,
        name
      });
      return res.json(order);
    });
  }
};

export {
  CreateOrderController
};
