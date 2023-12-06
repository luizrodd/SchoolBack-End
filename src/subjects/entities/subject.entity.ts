import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SchoolSubject } from "./schoolSubject.entity";

@Entity({ name: 'subjects' })
export class Subject {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'volume', type: 'int', nullable: false })
    volume: number;

    @Column({ name: 'unidade', type: 'int', nullable: false })
    unidade: number;

    @Column({ name: 'capitulo', type: 'int', nullable: false })
    capitulo: number;

    @Column({ name: 'semana', type: 'int', nullable: false })
    semana: number;

    @Column({ name: 'frente', type: 'varchar', nullable: false })
    frente: string;

    @Column({ name: 'aula', type: 'int', nullable: false })
    aula: number;

    @Column({ name: 'conteudo', type: 'varchar', length: 255, nullable: false })
    conteudo: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;

    @ManyToOne(() => SchoolSubject, {cascade: true})
    @JoinColumn()
    disciplina: SchoolSubject;

    constructor(subject: Partial<Subject>) {
        Object.assign(this, subject);
    }
}
