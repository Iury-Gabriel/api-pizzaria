import {
  router
} from "./chunk-KZNLC46Q.mjs";
import "./chunk-S4MGAUGE.mjs";
import "./chunk-OU6WVKAN.mjs";
import "./chunk-ORRZ5CZP.mjs";
import "./chunk-25WXPFZY.mjs";
import "./chunk-XLSB5X6T.mjs";
import "./chunk-577TZXBU.mjs";
import "./chunk-F4J7RPBW.mjs";
import "./chunk-L4JB7BOH.mjs";
import "./chunk-PA4YIHRD.mjs";
import "./chunk-25FQIORZ.mjs";
import "./chunk-TGJ2YZXD.mjs";
import "./chunk-QR7W5D42.mjs";
import "./chunk-MPHTBKTP.mjs";
import "./chunk-POSNKGTJ.mjs";
import "./chunk-V33DJSAR.mjs";
import "./chunk-VQR6NLCH.mjs";
import "./chunk-NHOQ74SH.mjs";
import "./chunk-QLFPTJ7T.mjs";
import "./chunk-KFM7IFAZ.mjs";
import "./chunk-L5MPQR3K.mjs";
import "./chunk-NKUEFZEG.mjs";
import "./chunk-ZUZDTQ4H.mjs";
import "./chunk-E43ZPJM3.mjs";
import "./chunk-O27KS436.mjs";
import "./chunk-RGKHEFMU.mjs";
import "./chunk-I3BR2DQE.mjs";
import "./chunk-NV6U25ST.mjs";
import "./chunk-YCH2MXXP.mjs";
import "./chunk-QRMJCJ25.mjs";
import "./chunk-BBWHLQBB.mjs";
import "./chunk-KCDTOR3X.mjs";
import "./chunk-XJRUIPN4.mjs";
import "./chunk-3WMMDE64.mjs";
import "./chunk-WDFZ2WQK.mjs";

// src/server.ts
import express from "express";
import "express-async-errors";
import cors from "cors";
import path from "path";
var app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp"))
);
app.use((err, req, res, next) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
});
app.listen({ port: 3333, host: "0.0.0.0" }, () => {
  console.log("HTTP server running!");
});
