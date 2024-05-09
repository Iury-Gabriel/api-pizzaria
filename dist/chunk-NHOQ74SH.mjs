import {
  FinishOrderService
} from "./chunk-QLFPTJ7T.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/order/FinishOrderController.ts
var FinishOrderController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const { order_id } = req.body;
      const finishOrderService = new FinishOrderService();
      const order = yield finishOrderService.execute({ order_id });
      return res.json(order);
    });
  }
};

export {
  FinishOrderController
};
