import Router from "express";
import controllers from "../controllers";
import Authentication from "../middlewares/authenticate";

const { verifyToken } = Authentication;

const { commentController } = controllers;

const {
  comment, getComment, updateComment, deleteComment, getUsersComments
} = commentController;
const router = Router();

router.post("/comment/:relatedId", verifyToken, comment);
router.get("/comment/:id", verifyToken, getComment);
router.get("/comments", verifyToken, getUsersComments);
router.patch("/comment/:id", verifyToken, updateComment);
router.delete("/comment/:id", verifyToken, deleteComment);

export default router;
