import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UserEntity } from './users.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { inputUser } from './inputs/user.input'

@Resolver((of) => UserEntity)
export class UserResolver {
	constructor (private readonly usersService: UsersService) {}

	@Query(() => [ CreateUserDto ])
	async users () {
		return this.usersService.getUsers()
	}

	@Mutation(() => CreateUserDto)
	async createUser (@Args('data') data: inputUser) {
		return this.usersService.createUser(data)
	}
}