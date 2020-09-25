import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { PostEntity } from './posts.entity'
import { CreatePostDto } from './dto/create-post.dto'
import { PostsService } from './posts.service'
import { inputPost } from './inputs/post.input'

@Resolver((of) => PostEntity)
export class PostResolver {
	constructor (private readonly postsService: PostsService) {}

	@Query(() => [ CreatePostDto ])
	async posts () {
		return this.postsService.getPosts()
	}

	@Mutation(() => CreatePostDto)
	async createPost (@Args('data') data: inputPost) {
		return this.postsService.createPost(data)
	}
}