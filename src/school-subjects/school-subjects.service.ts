import { Injectable } from '@nestjs/common';
import { CreateSchoolSubjectDto } from './dto/create-school-subject.dto';
import { UpdateSchoolSubjectDto } from './dto/update-school-subject.dto';

@Injectable()
export class SchoolSubjectsService {
  create(createSchoolSubjectDto: CreateSchoolSubjectDto) {
    return 'This action adds a new schoolSubject';
  }

  findAll() {
    return `This action returns all schoolSubjects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schoolSubject`;
  }

  update(id: number, updateSchoolSubjectDto: UpdateSchoolSubjectDto) {
    return `This action updates a #${id} schoolSubject`;
  }

  remove(id: number) {
    return `This action removes a #${id} schoolSubject`;
  }
}
