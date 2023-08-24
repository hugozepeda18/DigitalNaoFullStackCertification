import { Controller, Get, Post, Param, HttpException, HttpStatus, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('usuarios')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Promise<User []> {
    return this.usersService.findAll()
  }

  @Get(':id')
  getUser(@Param() params: any): Promise<string> {
    let usuario = this.usersService.findOne(Number(params.id))
    return usuario.then(user => user.nombre)
  }

  @Post(':nombre')
  addUser(@Param() params: any): any {
    this.usersService.add(params.nombre).then(() => {
      return 'Usuario creado'
    }).catch(() => {
      return new HttpException('message', HttpStatus.INTERNAL_SERVER_ERROR)
    })
  }

  @Delete(':id')
  deleteUser(@Param() params: any): Promise<HttpStatus> {
    return this.usersService.remove(params.id).then(() => {
      return HttpStatus.ACCEPTED
    })
  }
}
