import { Model, Table, Column, ForeignKey, DataType, PrimaryKey } from 'sequelize-typescript';
import Bibliograph from './Bibliograph';
import CurricularUnity from './CurricularUnity';

interface CurricularUnityBibliographAttributes {
  bibliographId: number;
  curricularUnityId: number;
}

@Table({ tableName: 'bibliographCurricularUnity' })
export default class CurricularUnityBibliograph extends Model<CurricularUnityBibliographAttributes> implements CurricularUnityBibliographAttributes {
  @ForeignKey(() => Bibliograph)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  bibliographId!: number;

  @ForeignKey(() => CurricularUnity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  curricularUnityId!: number;
}
