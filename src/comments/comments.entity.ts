import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ObjectType, Field, ID } from "type-graphql";
import { PostEntity } from '../posts/posts.entity';
import { type } from 'os';
import { UserEntity } from '../users/users.entity';

@Entity('comment')
@ObjectType()
export class CommentEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => PostEntity)
  @Column()
  post: PostEntity;

  @Field(type => UserEntity)
  @Column()
  author: UserEntity;

  @Field(type => String)
  @Column()
  text: string;
}