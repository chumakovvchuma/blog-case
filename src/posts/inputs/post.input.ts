import { CommentEntity } from 'src/comments/comments.entity'
import { UserEntity } from 'src/users/users.entity'
import { Field, Int, InputType } from 'type-graphql'

@InputType()
export class inputPost {
	@Field() readonly author: UserEntity
	@Field() readonly text: string
  @Field() readonly comments: CommentEntity
}
