import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { CreateScheduleDto } from './create-schedule';

export class UpdateUserDto{
    horarios: CreateScheduleDto[];
}
