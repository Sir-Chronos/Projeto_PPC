import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'ppc' }) // Define table name here
export default class PPC extends Model<PPC> {
  @Column(DataType.STRING) // Define type of the column
  occupationArea!: string;

  @Column(DataType.STRING) // Define type of the column
  course!: string;

  
  
}
