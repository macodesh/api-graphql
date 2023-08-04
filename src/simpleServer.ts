import { ApolloServer, gql } from 'apollo-server'
import { randomUUID } from 'node:crypto'

const typeDefs = gql`
  type User {
    id: String
    name: String
  }

  type Query {
    helloWorld: String!
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!): User!
  }
`

interface User {
  id: string
  name: string
}

const users: User[] = []

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      helloWorld: () => 'Hello, World!',
      users: () => users
    },
    Mutation: {
      createUser: (_, args) => {
        const newUser = {
          id: randomUUID(),
          name: args.name
        }

        users.push(newUser)

        return newUser
      }
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
