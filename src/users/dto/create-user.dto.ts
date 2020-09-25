import { Field, ObjectType, Int } from 'type-graphql'
import { UserRole } from '../users.entity';
import { PostEntity } from '../../posts/posts.entity';
import { CommentEntity } from '../../comments/comments.entity';

@ObjectType()
export class CreateUserDto {
  @Field() readonly id?: string
	@Field() readonly name: string
	@Field() readonly email: string
  @Field() readonly role: UserRole
  @Field() readonly posts: PostEntity
  @Field() readonly comments: CommentEntity
 }