import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CommentEntity } from './comments.entity'
import { CreateCommentDto } from './dto/create-comment.dto'
import { CommentsService } from './comments.service'
import { inputComment } from './inputs/comment.input'

@Resolver((of) => CommentEntity)
export class CommentResolver {
	constructor (private readonly commentsService: CommentsService) {}

	@Query(() => [ CreateCommentDto ])
	async comment () {
		return this.commentsService.getComments()
	}

	@Mutation(() => CreateCommentDto)
	async createComment (@Args('data') data: inputComment) {
		return this.commentsService.createComment(data)
	}
}