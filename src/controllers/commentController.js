import commentServices from "../services/commentServices";
import commentValidator from "../validation/commentValidation";
import Util from "../utilities/util";
import db from "../models";

export default class commentController {
  /**
         * allows a user to make a comment
         * @param {object} req - request object
         * @param {object} res - response object
         * @returns {object} success message | error
         */
  static async comment(req, res) {
    try {
      const { id } = req.decoded.user;
      const { relatedId } = req.params;
      const { comment } = req.body;
      const newComment = { comment, userId: id, relatedId };
      const { error } = commentValidator(newComment);
      if (error) {
        return res.status(400).json({ status: 400, error: error.message });
      }
      const createdComment = await commentServices.addComment(newComment);
      return res.status(201).json({ status: 201, message: "Comment has been added", data: createdComment });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async updateComment(req, res) {
    try {
      const { id } = req.params;
      const comment = await commentServices.getComment(id);
      if (!comment) return res.status(404).json({ status: 404, error: "Resource not found." });
      if (comment.userId !== req.decoded.user.id) {
        return res.status(401).json({ status: 401, error: "You are not authorized to perform this action", });
      }
      const result = await db.Comments.update(req.body, {
        where: { id },
        returning: true
      });
      return res.status(200).json({ status: 200, message: "Successfully updated comment", data: result[1][0].get() });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getComment(req, res) {
    try {
      const { id } = req.params;
      const comment = await commentServices.getComment(id);
      if (!comment) return res.status(404).json({ status: 404, error: "Resource not found.", });
      return res.status(200).json({ status: 200, message: "Successfully retrived comment", data: comment });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async deleteComment(req, res) {
    try {
      const { id } = req.params;
      const comment = await commentServices.getComment(id);
      if (!comment) return res.status(404).json({ status: 404, error: "Resource not found." });
      if (comment.userId !== req.decoded.user.id) {
        return res.status(401).json({ status: 401, error: "You are not authorized to perform this action.", });
      }
      await comment.destroy({ cascade: true });
      return res.status(200).json({ status: 200, message: "Successfully deleted comment", });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getUsersComments(req, res) {
    try {
      const { id } = req.decoded.user;
      const comments = await commentServices.getAllComments(id);
      return res.status(200).json({ status: 200, message: "Successfully retrived comments", data: comments });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server Error" });
    }
  }
}
