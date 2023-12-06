import { CreateSchoolSubjectDto } from "./create-schoolSubject.dto";

export class CreateSubjectDto {  
    volume: number;
    unidade: number;
    capitulo: number;
    semana: number;
    frente: string;
    aula: number;
    conteudo: string;
    disciplina: CreateSchoolSubjectDto;
 }
