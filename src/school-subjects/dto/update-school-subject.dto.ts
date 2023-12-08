import { PartialType } from '@nestjs/mapped-types';
import { CreateSchoolSubjectDto } from './create-school-subject.dto';

export class UpdateSchoolSubjectDto extends PartialType(CreateSchoolSubjectDto) {}
