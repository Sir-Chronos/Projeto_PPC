import { Model, Table, Column, DataType, AllowNull } from 'sequelize-typescript';

interface PPCAttributes {
  occupationArea: string;
  course: string;
}

@Table({ tableName: 'ppc' }) // Define table name here
export default class PPC extends Model<PPCAttributes> implements PPCAttributes{
  @Column({
    type: DataType.STRING,
    allowNull: false
  }) // Define type of the column
  occupationArea!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  }) // Define type of the column
  course!: string;

  
  
}
