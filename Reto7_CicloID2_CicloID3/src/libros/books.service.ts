import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { UsersService } from './../usuarios/users.service';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
    private readonly usersService: UsersService
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOne(id: number): Promise<Book | null> {
    return this.booksRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }

  async add(newBook: any): Promise<Book> {
    const nuevo = this.booksRepository.create({
      libro: newBook.nombre,
      autor: newBook.autor
    })
    await this.booksRepository.save(nuevo)
    return nuevo
  }

  async rent(idUsuario: number, idLibro: number) {
    let usuario = this.usersService.findOne(Number(idUsuario))
    if (usuario) {
      const book = {
        id: idLibro,
        prestado: true,
        id_alumno_prestamos: idUsuario
      }
      const booking = await this.booksRepository.preload(book)
      if (booking) {
        return this.booksRepository.save(booking)
      } else {
        throw new NotFoundException(`No se encuentra el libro ${idLibro}`) 
      }
    } else {
      throw new NotFoundException(`No se encuentra el usuario ${idUsuario}`) 
    }
  }
}
