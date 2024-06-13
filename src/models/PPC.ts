import { Model, Table, Column, DataType, AllowNull, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt } from 'sequelize-typescript';

interface PPCAttributes {
  id?: number;
  occupationArea: string;
  course: string;
  version: Date;
}

@Table({ tableName: 'ppc' })
export default class PPC extends Model<PPCAttributes> implements PPCAttributes {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  occupationArea!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  course!: string;  
  
  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  version!: Date;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  createdAt!: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  updatedAt!: Date;
}
