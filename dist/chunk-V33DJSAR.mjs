import {
  DetailOrderService
} from "./chunk-VQR6NLCH.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/order/DetailOrderController.ts
var DetailOrderController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const order_id = req.query.order_id;
      const detailOrderService = new DetailOrderService();
      const order = yield detailOrderService.execute({ order_id });
      return res.json(order);
    });
  }
};

export {
  DetailOrderController
};
