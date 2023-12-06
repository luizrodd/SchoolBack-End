import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'school_subject'})
export class SchoolSubject{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    constructor(schoolSubject: Partial<SchoolSubject>){
        Object.assign(this, schoolSubject)
    }
}