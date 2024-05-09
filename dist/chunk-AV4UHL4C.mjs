import {
  RemoveOrderController
} from "./chunk-E43ZPJM3.mjs";
import {
  SendOrderController
} from "./chunk-RGKHEFMU.mjs";
import {
  AuthUserController
} from "./chunk-XLSB5X6T.mjs";
import {
  CreateUserController
} from "./chunk-F4J7RPBW.mjs";
import {
  DetailUserController
} from "./chunk-PA4YIHRD.mjs";
import {
  CreateProductController
} from "./chunk-S4MGAUGE.mjs";
import {
  ListByCategoryController
} from "./chunk-ORRZ5CZP.mjs";
import {
  AddItemController
} from "./chunk-TGJ2YZXD.mjs";
import {
  CreateOrderController
} from "./chunk-MPHTBKTP.mjs";
import {
  DetailOrderController
} from "./chunk-V33DJSAR.mjs";
import {
  FinishOrderController
} from "./chunk-NHOQ74SH.mjs";
import {
  ListOrdersController
} from "./chunk-KFM7IFAZ.mjs";
import {
  RemoveItemController
} from "./chunk-NKUEFZEG.mjs";
import {
  multer_default
} from "./chunk-NV6U25ST.mjs";
import {
  isAuthenticated
} from "./chunk-6FNR6VWB.mjs";
import {
  CreateCategoryController
} from "./chunk-QRMJCJ25.mjs";
import {
  ListCategoryController
} from "./chunk-KCDTOR3X.mjs";

// src/routes.ts
import { Router } from "express";
import multer from "multer";
var router = Router();
var upload = multer(multer_default.upload("./tmp"));
router.get("/ping", (req, res) => {
  res.json({ pong: true });
});
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.post("/category", isAuthenticated, new CreateCategoryController().handle);
router.get("/categories", isAuthenticated, new ListCategoryController().handle);
router.post("/product", isAuthenticated, upload.single("file"), new CreateProductController().handle);
router.get("/category/product", isAuthenticated, new ListByCategoryController().handle);
router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
router.post("/order/add", isAuthenticated, new AddItemController().handle);
router.delete("/order/remove", isAuthenticated, new RemoveItemController().handle);
router.put("/order/send", isAuthenticated, new SendOrderController().handle);
router.get("/orders", isAuthenticated, new ListOrdersController().handle);
router.get("/order/detail", isAuthenticated, new DetailOrderController().handle);
router.put("/order/finish", isAuthenticated, new FinishOrderController().handle);

export {
  router
};
