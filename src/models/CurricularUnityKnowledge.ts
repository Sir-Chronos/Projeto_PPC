import { Model, Table, Column, ForeignKey, DataType } from 'sequelize-typescript';
import Knowledge from './Knowledge';
import CurricularUnity from './CurricularUnity';

interface CurricularUnityKnowledgeAttributes {
  knowledgeId: number;
  curricularUnityId: number;
}

@Table({ tableName: 'curricularUnityKnowledge' })
export default class CurricularUnityKnowledge extends Model<CurricularUnityKnowledgeAttributes> implements CurricularUnityKnowledgeAttributes {
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
