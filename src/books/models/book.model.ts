import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'books',
  timestamps: false,
})
export class Book extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    allowNull: false,
  })
  title: string;

  @Column({
    allowNull: false,
  })
  author: string;
}
