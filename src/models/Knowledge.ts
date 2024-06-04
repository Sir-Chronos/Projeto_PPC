import { Model, Table, Column, DataType, ForeignKey, AllowNull, BelongsTo, HasMany } from 'sequelize-typescript';

@Table({ tableName: 'knowledge' }) // Define table name here
export default class Knowledge extends Model<Knowledge> {
  @Column(DataType.STRING) // Define type of the column
  description!: string;

  @ForeignKey(() => Knowledge)

  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  knowFatherId?: number;

  @BelongsTo(() => Knowledge, 'knowFatherId')
  knowFather?: number;

  @HasMany(() => Knowledge, 'knowFatherId')
  children!: Knowledge[];
}