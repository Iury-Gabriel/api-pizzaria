import {
  prisma_default
} from "./chunk-3WMMDE64.mjs";
import {
  __async
} from "./chunk-WDFZ2WQK.mjs";

// src/services/user/AuthUserService.ts
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
var AuthUserService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ email, password }) {
      const user = yield prisma_default.user.findFirst({
        where: {
          email
        },
        select: {
          id: true,
          name: true,
          email: true,
          password: true
        }
      });
      if (!user) {
        throw new Error("User or password incorrect");
      }
      const passwordMatch = yield compare(password, user.password);
      if (!passwordMatch) {
        throw new Error("User or password incorrect");
      }
      const token = sign(
        {
          name: user.name,
          email: user.email
        },
        process.env.JWT_SECRET,
        {
          subject: user.id,
          expiresIn: "30d"
        }
      );
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        token
      };
    });
  }
};

export {
  AuthUserService
};
