import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from 'class-transformer';
@Module({
  imports: [TasksModule,
  TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port: 5432,
    username:'postgres',
    password:'postgres',
    database:'tasks_db',
    autoLoadEntities:true,
    synchronize: true,
  })],

})
export class AppModule {}
