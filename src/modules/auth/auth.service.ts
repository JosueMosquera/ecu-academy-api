import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
const bcrypt = require('bcrypt');
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService) { }

  async create(createAuthDto: CreateAuthDto) {
    const { email, password } = createAuthDto
    const findUser = await this.usersService.findOneByUserEmail(email)
    if (findUser) {
      const matchPassword = await bcrypt.compare(password, findUser.password)
      if (matchPassword) {
        return {
          login: 'nice login'
        }
      }
      else {
        return {
          login: 'contraseña incorrecta'
        }
      }
    }
    else {
      return {
        error: 'no esta registrado'
      }
    }

  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
