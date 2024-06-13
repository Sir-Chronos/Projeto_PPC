import { Model, Table, Column, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';

interface KnowledgeAttributes {
  description: string;
  knowFatherId?: number;
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

  @BelongsTo(() => Knowledge, { foreignKey: 'knowFatherId', targetKey: 'id' })
  parentKnowledge?: Knowledge;

  @HasMany(() => Knowledge, { foreignKey: 'knowFatherId', sourceKey: 'id' })
  childKnowledges?: Knowledge[];
}

