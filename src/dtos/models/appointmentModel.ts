import { Field, ObjectType } from 'type-graphql'

// Define o ObjectType para o modelo de compromisso (appointment).
@ObjectType()
export class AppointmentModel {
  // Define o campo 'startsAt' para o ObjectType com o decorator 'Field'.
  // O campo 'startsAt' é do tipo Date.
  @Field()
  startsAt: Date

  // Define o campo 'endsAt' para o ObjectType com o decorator 'Field'.
  // O campo 'endsAt' é do tipo Date.
  @Field()
  endsAt: Date
}
