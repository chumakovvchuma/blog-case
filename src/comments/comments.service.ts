import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CommentEntity } from './comments.entity'
import { Repository } from 'typeorm'
import { CreateCommentDto } from './dto/create-comment.dto'

@Injectable()
export class CommentsService {
	constructor (@InjectRepository(CommentEntity) private readonly CommentRepository: Repository<CommentEntity>) {}

	async createComment (data: CreateCommentDto): Promise<CommentEntity> {
		let comment = new CommentEntity()
		comment.author = data.author
		comment.text = data.text


		await this.CommentRepository.save(comment)

		return comment
	}

	async getComments () {
		return await this.CommentRepository.find()
	}
}