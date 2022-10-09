const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const usersGql = require("./schemas/users/user.resolver");

const server = new ApolloServer({
  typeDefs: [usersGql.schema],
  resolvers: [usersGql.resolver],
  context: (req) => {
    return req;
  },
});

(async function () {
  await server.start();
  server.applyMiddleware({ app });
})();

app.listen({ port: 5000 }, () => {
  console.log("server is listening on port" + 5000);
});
