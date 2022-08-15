import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
const bcrypt = require('bcrypt');
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) { }
  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepo.create(createUserDto)
    const password = await bcrypt.hash(newUser.password, 10)
    newUser.password = password
    const createdUser = await this.userRepo.save(newUser)
    return createdUser;
  }

  async findAll() {
    const users = await this.userRepo.find();
    return users
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({
      where: {
        id
      }
    });
    return user
  }
  async findOneByUserEmail(email: string) {
    const user = await this.userRepo.findOne({ where: { email } })
    return user
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    const userToUpdate = await this.userRepo.findOne({
      where: {
        id
      }
    })
    const updatedUser = this.userRepo.merge(userToUpdate, updateUserDto)
    return this.userRepo.save(updatedUser);
  }

  async remove(id: number) {
    const userToDelete = await this.userRepo.findOne({
      where: {
        id
      }
    })
    const userDeleted = await this.userRepo.delete(userToDelete)
    return userDeleted
  }
}
