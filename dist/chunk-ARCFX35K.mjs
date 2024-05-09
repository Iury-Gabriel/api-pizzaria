import {
  prisma_default
} from "./chunk-3WMMDE64.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/services/user/CreateUserService.ts
import { hash } from "bcryptjs";
var CreateUserService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ name, email, password }) {
      if (!email) {
        throw new Error("Email incorrect");
      }
      const userAlreadyExists = yield prisma_default.user.findFirst({
        where: {
          email
        }
      });
      if (userAlreadyExists) {
        throw new Error("User already exists");
      }
      const passwordHash = yield hash(password, 8);
      const user = yield prisma_default.user.create({
        data: {
          name,
          email,
          password: passwordHash
        },
        select: {
          id: true,
          name: true,
          email: true
        }
      });
      return user;
    });
  }
};

export {
  CreateUserService
};
