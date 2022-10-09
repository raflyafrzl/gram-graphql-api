const { gql } = require("apollo-server-express");
const fs = require("fs");
const userSchema = fs.readFileSync(`${__dirname}/user.schema.gql`, "utf-8");

//Model database
const { User } = require("../../models/index");

const schema = gql`
  ${userSchema}
`;

const resolver = {
  Query: {
    async getAllUser() {
      const result = await User.findAll();

      return result;
    },
  },

  Mutation: {
    async deleteUser(parent, args) {
      const { userId } = args;
      await User.destroy({
        where: {
          full_name: userId,
        },
      });
      return "Data has been deleted";
    },
  },
};

module.exports = { schema, resolver };

// const typeDefs = (module.exports = { schema });
