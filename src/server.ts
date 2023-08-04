import { ApolloServer } from 'apollo-server'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import path from 'node:path'
import { AppointmentsResolver } from './resolvers/appointmentsResolver'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentsResolver],
    emitSchemaFile: path.resolve(__dirname, 'graphql', 'schema.gql')
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await server.listen()

  console.log(`🚀 Server ready at ${url}`)
}

bootstrap()
