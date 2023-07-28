import { ApolloServer } from 'apollo-server'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import path from 'node:path'

import { AppointmentsResolver } from './resolvers/appointmentsResolver'

// Função assíncrona que inicia o servidor Apollo GraphQL.
async function bootstrap() {
  // Cria o esquema GraphQL usando a função buildSchema do 'type-graphql'.
  const schema = await buildSchema({
    resolvers: [AppointmentsResolver], // Define os resolvers utilizados para construir o esquema.
    emitSchemaFile: path.resolve(__dirname, 'graphql', 'schema.gql') // Define o local para emitir o arquivo de esquema gerado.
  })

  // Cria uma instância do ApolloServer com o esquema GraphQL definido acima.
  const server = new ApolloServer({
    schema
  })

  // Inicia o servidor Apollo e aguarda até que ele esteja pronto para receber consultas.
  const { url } = await server.listen()

  // Exibe uma mensagem indicando que o servidor está pronto para receber consultas.
  console.log(`🚀 Server ready at ${url}`)
}

// Chama a função 'bootstrap' para iniciar o servidor Apollo GraphQL.
bootstrap()
