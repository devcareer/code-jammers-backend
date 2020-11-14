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
  getAllComments: async id => {
    try {
      return await db.Comments.findAll({
        where: {
          userId: id
        },
        order: [
          ["createdAt", "DESC"],
        ],
      });
    } catch (error) {
      throw error;
    }
  },
};

export default commentServices;
