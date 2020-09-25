import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PostEntity } from './posts.entity'
import { Repository } from 'typeorm'
import { CreatePostDto } from './dto/create-post.dto'

@Injectable()
export class PostsService {
	constructor (@InjectRepository(PostEntity) private readonly PostRepository: Repository<PostEntity>) {}

	async createPost (data: CreatePostDto): Promise<PostEntity> {
		let post = new PostEntity()
		post.author = data.author
		post.text = data.text


		await this.PostRepository.save(post)

		return post
	}

	async getPosts () {
		return await this.PostRepository.find()
	}
}