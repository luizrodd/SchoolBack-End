import { Schedule } from "../entities/schedules.entity";
import { CreateScheduleDto } from "./create-schedule";

export class CreateUserDto {
    email:string;
    senha:string;
    usuario:string;
    horarios: CreateScheduleDto[];
}
