import { SchoolSubject } from "src/subjects/entities/schoolSubject.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
// import { Class } from "./class.entitty";
// import { Course } from "./course.entity";
// import { Day } from "./day.entity";
// import { Hour } from "./hour.entity";
import { AbstractEntity } from "src/database/abstract.entity";
import { User } from "./user.entity";

@Entity({ name: 'schedules' })
export class Schedule extends AbstractEntity<Schedule>{

    @OneToOne(() => SchoolSubject)
    @JoinColumn()
    disciplina: SchoolSubject;

    @Column()
    nome: string;

    @ManyToOne(() => User, user => user.horarios)
    user: User;
}