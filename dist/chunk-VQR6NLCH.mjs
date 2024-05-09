import {
  prisma_default
} from "./chunk-3WMMDE64.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/services/order/DetailOrderService.ts
var DetailOrderService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ order_id }) {
      const orders = yield prisma_default.item.findMany({
        where: {
          order_id
        },
        include: {
          product: true,
          Order: true
        }
      });
      return orders;
    });
  }
};

export {
  DetailOrderService
};
