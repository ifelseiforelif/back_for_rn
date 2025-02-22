import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './models/book.model';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [SequelizeModule.forFeature([Book])],
})
export class BooksModule {}
