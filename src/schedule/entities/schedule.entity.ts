import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "src/database/abstract.entity";
import { User } from "src/users/entities/user.entity";
import { SchoolSubjects } from "src/school-subjects/entities/school-subject.entity";

@Entity({ name: 'schedules' })
export class Schedule extends AbstractEntity<Schedule>{
    @OneToOne(() => SchoolSubjects)
    @JoinColumn()
    disciplina: SchoolSubjects;

    @Column()
    status: boolean;
    
    @Column()
    nome: string;

    @ManyToOne(() => User, user => user.horarios)
    user: User;
}