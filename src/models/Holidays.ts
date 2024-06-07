import { Model, Table, Column, DataType, AllowNull } from 'sequelize-typescript';

interface HolidaysAttributes {
  type: string;
  date: Date;
  compensation?: Date;
}

@Table({ tableName: 'holidays' }) // Define table name here
export default class Holidays extends Model<HolidaysAttributes> implements HolidaysAttributes{
  @Column({
    type:DataType.STRING,
    allowNull: false
  }) // Define type of the column
  type!: string;

  @Column({
    type:DataType.DATE,
    allowNull: false
  }) // Define type of the column
  date!: Date;

  @Column({
    type:DataType.DATE,
    allowNull: true
  })
  compensation?: Date;
}
