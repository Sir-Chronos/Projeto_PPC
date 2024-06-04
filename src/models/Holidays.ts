import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'holidays' }) // Define table name here
export default class Holidays extends Model<Holidays> {
  @Column(DataType.STRING) // Define type of the column
  type!: string;

  @Column(DataType.DATE) // Define type of the column
  date!: Date;

  @Column(DataType.DATE)
  compensation?: Date;
}
