import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'

import { CreateAppointmentInput } from '../dtos/inputs/createAppointmentInput'
import { AppointmentModel } from '../dtos/models/appointmentModel'
import { CustomerModel } from '../dtos/models/customerModel'

// Define o Resolver para o modelo 'AppointmentModel'.
@Resolver(() => AppointmentModel)
export class AppointmentsResolver {
  // Query para obter uma mensagem de saudação.
  @Query(() => String)
  async greeting(): Promise<string> {
    return 'Hello, World!'
  }

  // Query para obter uma lista de compromissos (appointments).
  @Query(() => [AppointmentModel])
  async appointments(): Promise<AppointmentModel[]> {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date()
      }
    ]
  }

  // Mutation para criar um novo compromisso (appointment).
  @Mutation(() => AppointmentModel)
  async createAppointment(@Arg('data') data: CreateAppointmentInput): Promise<AppointmentModel> {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    }

    return appointment
  }

  // FieldResolver para resolver a relação entre 'AppointmentModel' e 'CustomerModel'.
  @FieldResolver(() => CustomerModel)
  async customer(@Root() appointment: AppointmentModel): Promise<CustomerModel> {
    return { name: 'Marlon Couto' }
  }
}
