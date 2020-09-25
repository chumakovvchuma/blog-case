import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './users.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
	constructor (@InjectRepository(UserEntity) private readonly UserRepository: Repository<UserEntity>) {}

	async createUser (data: CreateUserDto): Promise<UserEntity> {
		let user = new UserEntity()
		user.name = data.name
		user.email = data.email
    user.role = data.role



		await this.UserRepository.save(user)

		return user
	}

	async getUsers () {
		return await this.UserRepository.find()
	}
}