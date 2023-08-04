import { IsDate } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateAppointmentInput {
  @Field()
  @IsDate()
  startsAt: Date

  @Field()
  @IsDate()
  endsAt: Date

  @Field()
  customerId: string
}
