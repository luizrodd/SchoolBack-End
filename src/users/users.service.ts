import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateSchoolSubjectDto } from 'src/subjects/dto/create-schoolSubject.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly entityManager: EntityManager
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = new User({
      ...createUserDto,
      horarios: [
      ]
    });
    return this.userRepository.save(user);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    return this.userRepository.findOne({
      where: {id},
      relations: { horarios: true }
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id });
    await this.entityManager.save(user);
  }

  async remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
