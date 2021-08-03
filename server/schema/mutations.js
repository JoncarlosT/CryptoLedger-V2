const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const UserType = require("./types/user_type");
const User = mongoose.model("user");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    register: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(_, { name, email, password }) {
        return new User({ name, email, password }).save();
      },
    },
  },
});

module.exports = mutation;
