import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagModule } from './tag/tag.module';
import { TodoItemModule } from './todo-item/todo-item.module';
import { SubTaskModule } from './sub-task/sub-task.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { type } from 'os';
import { TodoItemEntity } from './todo-item/todo-item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'events-api',
      username: 'postgres',
      password: 'events',
      logging: true,
      synchronize: true,
      port: 5432,
      autoLoadEntities: true,
      host: "localhost",
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }: { req: { headers: Record<string, string> } }) => ({ req }),
    }),
    AuthModule,
    UserModule,
    TodoItemModule,
    SubTaskModule,
    TagModule,
  ],
})
export class AppModule {}
