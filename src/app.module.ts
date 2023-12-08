import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { SubjectsModule } from './subjects/subjects.module';
import { UsersModule } from './users/users.module';
import { ScheduleModule } from './schedule/schedule.module';
import { SchoolSubjectsModule } from './school-subjects/school-subjects.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal:true }),DatabaseModule, SubjectsModule, UsersModule, ScheduleModule, SchoolSubjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
