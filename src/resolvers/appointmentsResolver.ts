import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { CreateAppointmentInput } from '../dtos/inputs/createAppointmentInput'
import { AppointmentModel } from '../dtos/models/appointmentModel'
import { CustomerModel } from '../dtos/models/customerModel'

@Resolver(() => AppointmentModel)
export class AppointmentsResolver {
  @Query(() => String)
  async greeting(): Promise<string> {
    return 'Hello, World!'
  }

  @Query(() => [AppointmentModel])
  async appointments(): Promise<AppointmentModel[]> {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date()
      }
    ]
  }

  @Mutation(() => AppointmentModel)
  async createAppointment(@Arg('data') data: CreateAppointmentInput): Promise<AppointmentModel> {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    }

    return appointment
  }

  @FieldResolver(() => CustomerModel)
  async customer(@Root() appointment: AppointmentModel): Promise<CustomerModel> {
    return { name: 'Marlon Couto' }
  }
}
