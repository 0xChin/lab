import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();

index.get("/", controller.index);
index.get("/counterfactual", controller.counterfactual);
index.get("/materialized", controller.materialized);
index.get("/resolve/:did", controller.resolve);
index.post("/commit", controller.commit);
