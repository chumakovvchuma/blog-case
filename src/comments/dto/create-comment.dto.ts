import { Field, ObjectType, Int } from 'type-graphql'
import { UserEntity } from '../../users/users.entity';
import { PostEntity } from '../../posts/posts.entity';

@ObjectType()
export class CreateCommentDto {
  @Field() readonly id?: string
	@Field() readonly post: PostEntity
	@Field() readonly text: string
  @Field() readonly author: UserEntity
 }