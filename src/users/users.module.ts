import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Schedule } from 'src/schedule/entities/schedule.entity';
import { SchoolSubjects } from 'src/school-subjects/entities/school-subject.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User, Schedule, SchoolSubjects])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
