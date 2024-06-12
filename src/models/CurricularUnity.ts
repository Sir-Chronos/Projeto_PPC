import { Model, Table, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import Bibliograph from './Bibliograph';
import CurricularUnityBibliograph from './CurricularUnityBibliograph';

interface CurricularUnityAttributes {
  objective: string;
  name: string;
}

@Table({ tableName: 'curricularUnity' })
export default class CurricularUnity extends Model<CurricularUnityAttributes> implements CurricularUnityAttributes {
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

  // Define the many-to-many relationship with Bibliograph
  @BelongsToMany(() => Bibliograph, () => CurricularUnityBibliograph)
  bibliographs!: Bibliograph[];
}
