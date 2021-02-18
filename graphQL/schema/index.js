/* building GraphQL Schema */
module.exports = `
type Message {
    text: String!
    channel: String!
    sender: String!
}

type RootQuery {
  getChatMessages: [Message]
}

type Subscription {
    message(channel: String!): Message!
}

type RootMutation {
    sendMessage(text: String!, channel: String!, sender: String!): Message!
}

schema {
    query: RootQuery
    mutation: RootMutation
    subscription: Subscription
}
`;

// /* building GraphQL Schema */
// module.exports = `
// type userData {
//     _id: ID!
//     username: String!
//     age: Int!
//     blood_group: String!
// 	nationality: String!
// 	contact_no: Int!
// }

// input userInput{
//     username: String!
//     age: Int!
//     blood_group: String!
// 	nationality: String!
// 	contact_no: Int!
// }

// type RootQuery {
//     userList: [userData!]!
// }

// type DeleteRes{
//     response:String!
// }
// type RootMutation {
//     createUser(newUser: userInput): userData!
//     deleteUser(username: String!): DeleteRes!
// }

// type Subscription{
//     user: userData!
// }

// schema {
//     query: RootQuery
//     mutation: RootMutation
//     subscription: Subscription
// }
// `;
