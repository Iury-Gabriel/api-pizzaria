import {
  RemoveItemService
} from "./chunk-ZUZDTQ4H.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/order/RemoveItemController.ts
var RemoveItemController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const item_id = req.query.item_id;
      const removeItemService = new RemoveItemService();
      const item = yield removeItemService.execute({
        item_id
      });
      return res.json(item);
    });
  }
};

export {
  RemoveItemController
};
