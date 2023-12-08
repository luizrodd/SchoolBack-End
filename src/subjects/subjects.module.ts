import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { SchoolSubjects } from 'src/school-subjects/entities/school-subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, SchoolSubjects])],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}
