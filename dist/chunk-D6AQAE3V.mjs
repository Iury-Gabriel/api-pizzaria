import {
  AuthUserService
} from "./chunk-J2KCBIOS.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/user/AuthUserController.ts
var AuthUserController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const { email, password } = req.body;
      const authUserService = new AuthUserService();
      const auth = yield authUserService.execute({ email, password });
      return res.json(auth);
    });
  }
};

export {
  AuthUserController
};
