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
const CryptoCoinType = require("./cryptocoin_type");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    cryptoWallet: {
      type: new GraphQLList(CryptoCoinType),
      resolve({ _id }) {
        return User.findById(_id)
          .populate("cryptoWallet")
          .then((user) => user.cryptoWallet);
      },
    },
    token: { type: GraphQLString },
    loggedIn: { type: GraphQLBoolean },
  }),
});

module.exports = UserType;
