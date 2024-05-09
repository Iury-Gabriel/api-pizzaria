import {
  ListOrdersService
} from "./chunk-L5MPQR3K.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/order/ListOrdersController.ts
var ListOrdersController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const listOrdersService = new ListOrdersService();
      const orders = yield listOrdersService.execute();
      return res.json(orders);
    });
  }
};

export {
  ListOrdersController
};
