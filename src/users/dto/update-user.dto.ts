import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { CreateScheduleDto } from 'src/schedule/dto/create-schedule.dto';

export class UpdateUserDto{
    usuario: string;
    email: string;
    senha: string;
    horarios: CreateScheduleDto[];
}
