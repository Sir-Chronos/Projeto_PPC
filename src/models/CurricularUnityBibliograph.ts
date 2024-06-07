import { Model, Table, Column, ForeignKey, DataType } from 'sequelize-typescript';
import Bibliograph from './Bibliograph';
import CurricularUnity from './CurricularUnity';

interface BibliographCurricularUnityAttributes {
  bibliographId: number;
  curricularUnityId: number;
}

@Table({ tableName: 'bibliograph_curricularUnity' })
export default class BibliographCurricularUnity extends Model<BibliographCurricularUnityAttributes> implements BibliographCurricularUnityAttributes {
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
