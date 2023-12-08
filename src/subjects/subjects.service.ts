import { Inject, Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { EntityManager, Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SchoolSubjects } from 'src/school-subjects/entities/school-subject.entity';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
    private readonly entityManager: EntityManager
  ) { }

  async create(createSubjectDto: CreateSubjectDto) {
    const schoolSubject = new SchoolSubjects({ 
      ...createSubjectDto.disciplina
    });
    const subject = new Subject({
      ...createSubjectDto,
      disciplina: schoolSubject
    });
    await this.entityManager.save(subject);
  }

  async findAll() {
    return this.subjectRepository.find();
  }

  async findOne(id: string) {
    return this.subjectRepository.findOne({ 
      where: { id },
      relations: {disciplina: true}
    });
  }

  async update(id: string, updateSubjectDto: UpdateSubjectDto) {
    const subject = await this.subjectRepository.findOne({ where: { id } });
    if (subject) {
      this.entityManager.update(Subject, id, updateSubjectDto);
    }
  }

  async remove(id: string) {
    const subject = await this.subjectRepository.findOne({ where: { id } });
    if (subject) {
      this.entityManager.delete(Subject, id);
    }
  }
}
