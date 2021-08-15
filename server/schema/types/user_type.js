const mongoose = require("mongoose");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean,
} = graphql;
const User = mongoose.model("user");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    cryptoWallet: {
      type: new GraphQLList(require("./cryptocoin_type")),
      async resolve({ _id }) {
        return await User.findById(_id)
          .populate("cryptoWallet")
          .then((user) => user.cryptoWallet);
      },
    },
    token: { type: GraphQLString },
    loggedIn: { type: GraphQLBoolean },
  }),
});

module.exports = UserType;
