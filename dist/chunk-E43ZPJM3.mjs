import {
  RemoveOrderService
} from "./chunk-O27KS436.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/order/RemoveOrderController.ts
var RemoveOrderController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const order_id = req.query.order_id;
      const removeOrderService = new RemoveOrderService();
      const order = yield removeOrderService.execute({
        order_id
      });
      return res.json(order);
    });
  }
};

export {
  RemoveOrderController
};
