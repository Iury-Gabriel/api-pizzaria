import {
  CreateUserService
} from "./chunk-ARCFX35K.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/controllers/user/CreateUserController.ts
var CreateUserController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const { name, email, password } = req.body;
      const createUserService = new CreateUserService();
      const user = yield createUserService.execute({
        name,
        email,
        password
      });
      return res.json(user);
    });
  }
};

export {
  CreateUserController
};
