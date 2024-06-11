import { Model, Table, Column, DataType, BelongsToMany, HasMany } from 'sequelize-typescript';

interface CurricularUnityAttributes {
  objective: string;
  name: string;
}

@Table({ tableName: 'curricularUnity' }) // Define table name here
export default class CurricularUnity extends Model<CurricularUnityAttributes> implements CurricularUnityAttributes{
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  objective!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}
