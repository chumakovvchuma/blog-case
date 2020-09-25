import { Field, ObjectType, Int } from 'type-graphql'
import { CommentEntity } from '../../comments/comments.entity';
import { UserEntity } from '../../users/users.entity';

@ObjectType()
export class CreatePostDto {
  @Field() readonly id?: string
	@Field() readonly author: UserEntity
	@Field() readonly text: string
  @Field() readonly comments: CommentEntity
 }