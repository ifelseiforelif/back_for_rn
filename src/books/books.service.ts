import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './models/book.model';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book) private readonly bookModel: typeof Book) {}
  async create(createBookDto: any) {
    const book = await this.bookModel.create(createBookDto);
    return book;
  }

  async findAll() {
    const books = await this.bookModel.findAll();
    return books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.bookModel.update(updateBookDto, {
      where: {
        id,
      },
    });
    return { ...updateBookDto, id };
  }

  async full_update(id: number, updateBookDto: CreateBookDto) {
    const book = await this.bookModel.findByPk(id);
    if (!book) {
      throw new Error('Книгу не знайдено');
    }

    await book.update(updateBookDto);
    return book;
  }

  async remove(id: number) {
    await this.bookModel.destroy({ where: { id } });
    return `This action removes a #${id} book`;
  }
}
