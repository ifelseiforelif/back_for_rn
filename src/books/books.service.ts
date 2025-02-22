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

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
