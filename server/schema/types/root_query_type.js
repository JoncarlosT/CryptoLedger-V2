const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const UserType = require("./user_type");
const User = mongoose.model("user");

const CryptoCoinType = require("./cryptocoin_type");
const CryptoCoin = mongoose.model("cryptocoin");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      },
    },

    user: {
      type: UserType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, { _id }) {
        return User.findById(_id);
      },
    },

    cryptoCoins: {
      type: new GraphQLList(CryptoCoinType),
      resolve() {
        return CryptoCoin.find({});
      },
    },
  }),
});

module.exports = RootQueryType;
