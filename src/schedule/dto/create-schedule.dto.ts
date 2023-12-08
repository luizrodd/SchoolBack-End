import { CreateSchoolSubjectDto } from "src/subjects/dto/create-schoolSubject.dto";

export class CreateScheduleDto {
    nome: string;
    disciplina: CreateSchoolSubjectDto;
}