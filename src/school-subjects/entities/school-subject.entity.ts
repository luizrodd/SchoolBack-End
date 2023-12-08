import { AbstractEntity } from "../../database/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity({name: 'school_subject'})
export class SchoolSubjects extends AbstractEntity<SchoolSubjects>{
    @Column()
    nome: string;

    @Column()
    descricao: string;
}