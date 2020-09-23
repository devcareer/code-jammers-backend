import express from "express";

import { editProfile } from "../controllers/user.controller";

const router = express.Router();

router.put("/:username/edit", editProfile);

module.exports = router;
