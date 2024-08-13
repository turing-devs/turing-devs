import { Router } from "express";

import { submitForm } from "../controllers/form.controller.js";
import formValidator from "../middlewares/formValidator.middleware.js";

const formRouter = Router();

formRouter.route("/submit").post(formValidator, submitForm);

export default formRouter;
