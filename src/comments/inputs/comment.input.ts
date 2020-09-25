import { PostEntity } from 'src/posts/posts.entity'
import { UserEntity } from 'src/users/users.entity'
import { Field, Int, InputType } from 'type-graphql'


@InputType()
export class inputComment {
	@Field() readonly post: PostEntity
	@Field() readonly text: string
  @Field() readonly author: UserEntity
}