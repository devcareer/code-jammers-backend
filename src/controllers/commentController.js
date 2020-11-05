import commentServices from "../services/commentServices";
import commentValidator from "../validation/commentValidation";
import Util from "../utilities/util";
import db from "../models";

const util = new Util();

const commentController = {
  /**
   * allows a user to make a comment
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {object} success message | error
   */
  comment: async (req, res) => {
    const { id } = req.decoded.user;
    const { comment, relatedId } = req.body;

    const newComment = { comment, userId: id, relatedId };

    try {
      const { error } = commentValidator(newComment);
      if (error) {
        return res.status(400).json({ status: 400, error: error.message });
      }
      await commentServices.addComment(newComment);
      return res.status(201).json({ status: 201, message: "Comment has been added", data: newComment });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  },
  updateComment: async (req, res) => {
    const { id } = req.params;
    const isOwner = await commentServices.isOwnerOfComment(id, req.decoded.user.id, res);

    if (!isOwner) {
      return res.status(401).send({ status: 401, error: "You are not authorized to perform this action", });
    }

    try {
      const result = await db.Comments.update(req.body, {
        where: { id },
        returning: true
      });

      return res.status(200).send({
        status: 200,
        message: "Successfully updated comment",
        data: result[1][0].get()
      });
    } catch (error) {
      return res.status(404).send({ status: 404, error: "Resource not found." });
    }
  },
  getComment: async (req, res) => {
    const { id } = req.params;

    try {
      const comment = await commentServices.getComment(id);

      if (!comment) {
        return res.status(404).send({ status: 404, error: "Resource not found.", });
      }

      return res.status(200).send({
        status: 200,
        message: "Successfully retrived comment",
        data: comment
      });
    } catch (error) {
      return res.status(404).send({ status: 404, error: "Resource not found." });
    }
  },
  deleteComment: async (req, res) => {
    const { id } = req.params;

    const isOwner = await commentServices.isOwnerOfComment(id, req.decoded.user.id, res);

    if (!isOwner) {
      return res.status(401).send({ status: 401, error: "You are not authorized to perform this action.", });
    }

    try {
      const comment = await commentServices.getComment(id);

      await comment.destroy({ cascade: true });

      return res.status(200).send({
        status: 200,
        message: "Successfully deleted comment",
      });
    } catch (error) {
      return res.status(404).send({ status: 404, error: "Resource not found." });
    }
  }
};

export default commentController;
