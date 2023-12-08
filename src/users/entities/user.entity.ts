import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "src/database/abstract.entity";
import { Schedule } from "src/schedule/entities/schedule.entity";

@Entity({name: 'users'})
export class User extends AbstractEntity<User>{
    @Column()
    email: string;

    @Column()
    usuario: string;

    @Column()
    senha: string;

    @OneToMany(() => Schedule, schedule => schedule.user, {cascade: true})
    horarios: Schedule[];

}
