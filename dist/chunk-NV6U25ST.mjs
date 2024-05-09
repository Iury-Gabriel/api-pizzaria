// src/config/multer.ts
import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";
var multer_default = {
  upload(folder) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;
          return callback(null, fileName);
        }
      })
    };
  }
};

export {
  multer_default
};
