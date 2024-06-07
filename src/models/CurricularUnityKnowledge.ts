import { Model, Table, Column, ForeignKey, DataType } from 'sequelize-typescript';
import Knowledge from './Knowledge';
import CurricularUnity from './CurricularUnity';

interface KnowledgeCurricularUnityAttributes {
  knowledgeId: number;
  curricularUnityId: number;
}

@Table({ tableName: 'knowledgeCurricularUnity' })
export default class KnowledgeCurricularUnity extends Model<KnowledgeCurricularUnityAttributes> implements KnowledgeCurricularUnityAttributes {
  @ForeignKey(() => Knowledge)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  knowledgeId!: number;

  @ForeignKey(() => CurricularUnity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  curricularUnityId!: number;
}
