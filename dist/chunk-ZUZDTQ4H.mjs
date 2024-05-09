import {
  prisma_default
} from "./chunk-3WMMDE64.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/services/order/RemoveItemService.ts
var RemoveItemService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ item_id }) {
      const item = yield prisma_default.item.delete({
        where: {
          id: item_id
        }
      });
      return item;
    });
  }
};

export {
  RemoveItemService
};
