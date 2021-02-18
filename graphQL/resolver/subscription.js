const pubsub = require("../helper");
// const { GraphQLServer, PubSub } = require("graphql-yoga");
// const pubsub = new PubSub();
module.exports = {
  Subscription: {
    message: {
      subscribe: (_, channel, { pubsub }) => {
        return pubsub.asyncIterator(channel);
      },
    },
  },
};

// const { pubsub } = require('../helper');
// module.exports = {
//     Subscription: {
//         user: {
//             subscribe(parent, args, ctx, info) {
//                 return pubsub.asyncIterator('userTopic') //Topic
//             }
//         }
//     }
// }
