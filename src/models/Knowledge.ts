import { Model, Table, Column, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import CurricularUnity from './CurricularUnity';

interface KnowledgeAttributes {
  description: string;
  knowFatherId?: number;
  knowFather?: Knowledge;
  children?: Knowledge[];
  curricularUnityId?: number; // Adicionando o campo curricularUnityId
}

@Table({ tableName: 'knowledge' })
export default class Knowledge extends Model<KnowledgeAttributes> implements KnowledgeAttributes {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  description!: string;

  @ForeignKey(() => Knowledge)
  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  knowFatherId?: number;

  @BelongsTo(() => Knowledge, 'knowFatherId')
  knowFather?: Knowledge;

  @HasMany(() => Knowledge, 'knowFatherId')
  children?: Knowledge[];

  @ForeignKey(() => CurricularUnity) // Definindo a chave estrangeira para CurricularUnity
  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  curricularUnityId?: number;

  @BelongsTo(() => CurricularUnity) // Associe CurricularUnity a Knowledge
  curricularUnity?: CurricularUnity;
}
