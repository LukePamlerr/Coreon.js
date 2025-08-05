// This file implements a GraphQL API for flexible data querying.

const { ApolloServer, gql } = require('apollo-server');
const { getData, createData, updateData, deleteData } = require('../../services/dataService');

// GraphQL schema definition
const typeDefs = gql`
  type Query {
    getData(id: ID!): Data
    getAllData: [Data]
  }

  type Mutation {
    createData(input: DataInput): Data
    updateData(id: ID!, input: DataInput): Data
    deleteData(id: ID!): Boolean
  }

  type Data {
    id: ID!
    name: String!
    description: String
  }

  input DataInput {
    name: String!
    description: String
  }
`;

// Resolvers for the GraphQL API
const resolvers = {
  Query: {
    getData: async (_, { id }) => {
      return await getData(id);
    },
    getAllData: async () => {
      return await getData();
    },
  },
  Mutation: {
    createData: async (_, { input }) => {
      return await createData(input);
    },
    updateData: async (_, { id, input }) => {
      return await updateData(id, input);
    },
    deleteData: async (_, { id }) => {
      return await deleteData(id);
    },
  },
};

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
const startServer = async () => {
  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
};

startServer();