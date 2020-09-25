import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ObjectType, Field, ID } from "type-graphql";
import { UserEntity } from '../users/users.entity';
import { type } from 'os';
import { CommentEntity } from '../comments/comments.entity';



@Entity('post')
@ObjectType()
export class PostEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => UserEntity)
  @Column()
  author: UserEntity;

  @Field(type => String)
  @Column()
  text: string;

  @Field(type => CommentEntity)
  @Column()
  comments: [CommentEntity];
}