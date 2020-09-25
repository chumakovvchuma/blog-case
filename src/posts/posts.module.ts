import { PostResolver } from './posts.resolver'
import { Module } from '@nestjs/common'
import { PostsService } from './posts.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostEntity } from './posts.entity'

@Module({
	imports: [ TypeOrmModule.forFeature([ PostEntity ]) ],
	providers: [ PostResolver, PostsService ]
})
export class PostsModule {}