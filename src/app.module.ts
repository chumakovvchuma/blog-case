import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { CatModule } from './cats/cats.module'
@Module({
	imports: [
		CommentsModule,
		UsersModule,
		PostsModule,
		TypeOrmModule.forRoot(),
		GraphQLModule.forRoot({
			autoSchemaFile: 'schema.gpl'
		}),
		CatModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule { }
