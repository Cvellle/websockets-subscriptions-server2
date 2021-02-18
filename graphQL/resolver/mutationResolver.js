const Message = require("../../model/messages");
const { pubsub } = require("../helper");
let messages = [];
module.exports = {
  RootMutation: {
    // sendMessage: (_, { sender, channel, text }, { pubsub }) => {
    //   const message = { sender, channel, text };
    //   messages.push(message);
    //   pubsub.publish(channel, { message });
    //   return message;
    // },

    sendMessage: async (parent, { text, channel, sender }, { pubsub }) => {
      const message = { text, channel, sender };
      const newMessage = new Message({
        text: message.text,
        channel: message.channel,
        sender: message.sender,
      });
      try {
        console.log("user create===============", message);
        let query = {
          text: message.text,
          channel: message.channel,
          sender: message.sender,
        };
        const createUserDetails = await Message.findOneAndUpdate(
          query,
          //   message.text,
          //   message.channel,
          //   message.sender,
          { upsert: true, new: true }
        );
        // console.log("user create===============", createUserDetails);
        pubsub.publish(channel, { newMessage });
        return newMessage.save();
      } catch (error) {
        return error;
      }
    },
  },
};

// createUser: async(parent, args, ctx, info) => {
//     try {
//         console.log('user create===============', args);
//         let query = { 'username': args.newUser.username };
//         const createUserDetails = await userModels.findOneAndUpdate(query, args.newUser, { upsert: true, new: true });
//         console.log('user create===============', createUserDetails);
//         pubsub.publish('userTopic', {
//             user: createUserDetails
//         });
//         return createUserDetails;
//     } catch (error) {
//         return error;
//     }
// },
// deleteUser: async(parent, args, ctx, info) => {
//     let responseMSG = {};
//     try {
//         let query = { 'username': args.username };
//         const createUserDetails = await userModels.findOneAndDelete(query);
//         console.log('createUserDetails--------------------', createUserDetails);
//         if (createUserDetails == null) {
//             responseMSG.response = "No User found for this opertaion";
//             return responseMSG;
//         } else {
//             responseMSG.response = "Success";
//             return responseMSG;
//         }

//     } catch (error) {
//         responseMSG.response = "Fail";
//         return responseMSG;
//     }
// }
