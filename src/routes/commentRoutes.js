import Router from "express";
import controllers from "../controllers";
import Authentication from "../middlewares/authenticate";

const { verifyToken, verifyUserById } = Authentication;

const { commentController } = controllers;

const {
  comment, getComment, updateComment, deleteComment, getUsersComments
} = commentController;
const router = Router();

router.post("/comment", verifyToken, verifyUserById, comment);
router.get("/comment/:id", verifyToken, verifyUserById, getComment);
router.get("/comments", verifyToken, verifyUserById, getUsersComments);
router.patch("/comment/:id", verifyToken, verifyUserById, updateComment);
router.delete("/comment/:id", verifyToken, verifyUserById, deleteComment);

export default router;
