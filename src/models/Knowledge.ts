import { Model, Table, Column, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';

interface KnowledgeAttributes {
  description: string;
  knowFatherId?: number;
  knowFather?: Knowledge;
  children?: Knowledge[];
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
}
