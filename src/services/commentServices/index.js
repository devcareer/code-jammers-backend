import db from "../../models";

const commentServices = {
  addComment: async commentData => {
    try {
      return await db.Comments.create(commentData);
    } catch (error) {
      throw error;
    }
  },
  getComment: async id => {
    try {
      return await db.Comments.findOne({ where: { id } });
    } catch (error) {
      throw error;
    }
  },
  isOwnerOfComment: async (commentId, userId, res) => {
    try {
      const comment = await db.Comments.findOne({ where: { id: commentId } });

      if (comment.userId === userId) {
        return true;
      }
      return false;
    } catch (error) {
      res.status(404).send({ status: 404, error: "Resourse not found." });
    }
  }
};

export default commentServices;
