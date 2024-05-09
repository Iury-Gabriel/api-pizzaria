import {
  DetailUserService
} from "./chunk-25FQIORZ.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/user/DetailUserController.ts
var DetailUserController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const user_id = req.user_id;
      const detailUserService = new DetailUserService();
      const user = yield detailUserService.execute(user_id);
      return res.json(user);
    });
  }
};

export {
  DetailUserController
};
