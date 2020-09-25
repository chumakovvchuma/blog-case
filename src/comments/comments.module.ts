import { CommentResolver } from './comments.resolver'
import { Module } from '@nestjs/common'
import { CommentsService } from './comments.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentEntity } from './comments.entity'

@Module({
	imports: [ TypeOrmModule.forFeature([ CommentEntity ]) ],
	providers: [ CommentResolver, CommentsService ]
})
export class CommentsModule { }
