import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'bibliograph' }) // Define table name here
export default class Bibliograph extends Model<Bibliograph> {
  @Column(DataType.STRING) // Define type of the column
  type!: string;

  @Column(DataType.STRING) // Define type of the column
  description!: string;
}