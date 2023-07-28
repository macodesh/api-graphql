import { ApolloServer, gql } from 'apollo-server'
import { randomUUID } from 'node:crypto'

// Define os tipos (schemas) GraphQL usando a linguagem SDL (Schema Definition Language).
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

// Define a interface "User" para representar o tipo de objeto "User".
interface User {
  id: string
  name: string
}

// Cria um array vazio para armazenar os usuários em memória.
const users: User[] = []

// Cria uma instância do ApolloServer configurando os tipos (schemas) e resolvers para as operações GraphQL.
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      // Resolvedor para a consulta "helloWorld" que retorna uma mensagem de saudação.
      helloWorld: () => 'Hello, World!',

      // Resolvedor para a consulta "users" que retorna todos os usuários armazenados no array "users".
      users: () => users
    },

    Mutation: {
      // Resolvedor para a mutação "createUser" que cria um novo usuário e o adiciona ao array "users".
      createUser: (_, args) => {
        const newUser = {
          id: randomUUID(), // Gera um ID aleatório para o novo usuário.
          name: args.name // Usa o nome fornecido nos argumentos para o novo usuário.
        }

        users.push(newUser) // Adiciona o novo usuário ao array "users".

        return newUser // Retorna o novo usuário criado como resposta da mutação.
      }
    }
  }
})

// Inicia o servidor Apollo na porta padrão e exibe uma mensagem quando estiver pronto para receber consultas.
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
