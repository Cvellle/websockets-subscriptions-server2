const userModels = require("../../model/messages");

module.exports = {
  RootQuery: {
    getChatMessages: async () => {
      try {
        const getUser = await userModels.find();
        return getUser;
      } catch (error) {
        return error;
      }
    },
  },
};
