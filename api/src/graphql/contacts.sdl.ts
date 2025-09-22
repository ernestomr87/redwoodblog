export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @requireAuth
  }
`
