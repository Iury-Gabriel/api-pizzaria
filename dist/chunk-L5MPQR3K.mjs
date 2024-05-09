import {
  prisma_default
} from "./chunk-3WMMDE64.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/services/order/ListOrdersService.ts
var ListOrdersService = class {
  execute() {
    return __async(this, null, function* () {
      const orders = yield prisma_default.order.findMany({
        where: {
          draft: false,
          status: false
        },
        orderBy: {
          createdAt: "desc"
        }
      });
      return orders;
    });
  }
};

export {
  ListOrdersService
};
