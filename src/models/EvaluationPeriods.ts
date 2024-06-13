import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface EvaluationPeriodsAttributes {
  name: string;
  beginning: Date;
  ending: Date;
}

@Table({ tableName: 'evaluation_periods' })
export default class EvaluationPeriods extends Model<EvaluationPeriodsAttributes> implements EvaluationPeriodsAttributes {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  beginning!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  ending!: Date;
}
