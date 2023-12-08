import { Module } from '@nestjs/common';
import { SchoolSubjectsService } from './school-subjects.service';
import { SchoolSubjectsController } from './school-subjects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolSubjects } from './entities/school-subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolSubjects])],
  controllers: [SchoolSubjectsController],
  providers: [SchoolSubjectsService],
})
export class SchoolSubjectsModule {}
