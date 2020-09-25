import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ObjectType, Field, ID } from "type-graphql";
import { registerEnumType } from "@nestjs/graphql";
import { PostEntity } from '../posts/posts.entity';
import { CommentEntity } from '../comments/comments.entity';


export enum UserRole {
  ADMIN = "admin",
  AUTHOR = "author"
}

registerEnumType(UserRole, {
  name: 'UserRole',
});

@Entity('user')
@ObjectType()
export class UserEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
  
  @Field(() => String)
  @Column()
  name: string;
  
  @Field(() => String)
  @Column()
  email: string;
  
  @Field(type => UserRole)
  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.AUTHOR
  })
  role: UserRole
  
  @Field(type => [PostEntity])
  @Column()
  posts: [];
  
  @Field(type => [CommentEntity])
  @Column()
  coments:[]
  }