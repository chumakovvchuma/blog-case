import { CommentEntity } from 'src/comments/comments.entity'
import { PostEntity } from 'src/posts/posts.entity'
import { Field, Int, InputType } from 'type-graphql'
import { UserRole } from '../users.entity'

@InputType()
export class inputUser {
	@Field() readonly name: string
	@Field() readonly email: string
  @Field() readonly role: UserRole
  @Field() readonly posts: PostEntity
  @Field() readonly comments: CommentEntity
}
