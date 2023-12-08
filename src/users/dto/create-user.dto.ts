import { CreateScheduleDto } from "src/schedule/dto/create-schedule.dto";

export class CreateUserDto {
    email:string;
    senha:string;
    usuario:string;
    horarios: CreateScheduleDto[];
}
