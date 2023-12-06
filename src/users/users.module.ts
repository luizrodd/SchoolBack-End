import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { SchoolSubject } from 'src/subjects/entities/schoolSubject.entity';
// import { Class } from './entities/class.entitty';
// import { Course } from './entities/course.entity';
// import { Day } from './entities/day.entity';
// import { Hour } from './entities/hour.entity';
import { Schedule } from './entities/schedules.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User, Schedule, SchoolSubject])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
