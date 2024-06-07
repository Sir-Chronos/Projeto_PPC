import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface SkillAttributes {
  type: string;
  description: string;
}

@Table({ tableName: 'skill' })
export default class Skill extends Model<SkillAttributes> implements SkillAttributes {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  type!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  description!: string;
}