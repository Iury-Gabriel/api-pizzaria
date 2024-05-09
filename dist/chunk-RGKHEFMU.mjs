import {
  SendOrderService
} from "./chunk-I3BR2DQE.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/order/SendOrderController.ts
var SendOrderController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const { order_id } = req.body;
      const sendOrderService = new SendOrderService();
      const order = yield sendOrderService.execute({ order_id });
      return res.json(order);
    });
  }
};

export {
  SendOrderController
};
