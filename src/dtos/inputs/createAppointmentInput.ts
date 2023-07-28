import { IsDate } from 'class-validator'
import { Field, InputType } from 'type-graphql'

// Define o InputType para criar um novo compromisso (appointment).
@InputType()
export class CreateAppointmentInput {
  // Define o campo 'startsAt' para o input type com o decorator 'Field'.
  // Adiciona a validação para garantir que o valor é do tipo Date usando o decorator 'IsDate'.
  @Field()
  @IsDate()
  startsAt: Date

  // Define o campo 'endsAt' para o input type com o decorator 'Field'.
  // Adiciona a validação para garantir que o valor é do tipo Date usando o decorator 'IsDate'.
  @Field()
  @IsDate()
  endsAt: Date

  // Define o campo 'customerId' para o input type com o decorator 'Field'.
  // O campo 'customerId' é do tipo string, mas não possui validação específica neste exemplo.
  @Field()
  customerId: string
}
